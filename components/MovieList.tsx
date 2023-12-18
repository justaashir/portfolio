import { useState, useEffect } from "react";
import parseString from "xml2js";

interface Movie {
  title: string;
  link: string;
  watchedDate: string;
  rating: string;
  description: string;
}

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    // Fetch the RSS feed from Letterboxd
    fetch("https://letterboxd.com/justaashir/rss/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((xmlData) => {
        // Parse the RSS feed XML to JavaScript object
        parseString(xmlData, (err, result) => {
          if (err) {
            console.error("Error parsing XML:", err);
            return;
          }

          // Extract movie items from the parsed object
          const movieItems = result.rss.channel[0].item;

          // Create an array of movie information
          const moviesData: Movie[] = movieItems.map((item) => ({
            title: item.title[0],
            link: item.link[0],
            watchedDate: item["letterboxd:watchedDate"][0],
            rating: item["letterboxd:memberRating"][0],
            description: item.description[0],
          }));

          setMovies(moviesData);
        });
      })
      .catch((error) => {
        console.error("Error fetching RSS feed:", error);
      });
  }, []);

  return (
    <div>
      <h3 className="text-2xl mt-4 font-semibold">Recently Watched Movies</h3>
      <ul className="list-disc ml-6">
        {movies.map((movie, index) => (
          <li key={index}>
            <a href={movie.link} target="_blank" rel="noopener noreferrer">
              {movie.title}
            </a>{" "}
            - {movie.rating}
            <p>{movie.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
