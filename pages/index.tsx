import Head from "next/head";
import Image from "next/image";
import { useIsFontReady } from "../lib/useIsFontReady";
import cx from "clsx";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "../components/RainbowHighlight";
import { CircleHighlight } from "../components/CircleHighlight";
import profileImg from "../public/profile-pic.jpeg";
const colors = ["#A7F3D0", "#BAE6FD", "#C7D2FE", "#FDE68A"];
const FOCUS_VISIBLE_OUTLINE = `focus:text-sky-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 focus-visible:ring-opacity-60 focus-visible:outline-none focus:outline-none  rounded`;
import NowPlaying from "../components/NowPlaying";
import { Movie } from '../types/Movie'
import { Food } from "../types/Food";

import { GraphQLClient } from "graphql-request";
import dayjs from 'dayjs'
const graphcms = new GraphQLClient(
  process.env.GRAPHQL_URL_ENDPOINT
    ? process.env.GRAPHQL_URL_ENDPOINT
    : "https://api-ap-northeast-1.graphcms.com/v2/ckw7ozeeq0dji01w32opp1auy/master"
);

export async function getStaticProps() {
  const { movies, foods } = await graphcms.request(
    `
    query Library {
      movies(orderBy: createdAt_DESC, first:2) {
        id
        name
        review
        rating
        watch_date
        poster {
          id,
          url
        }
        genre
      }
      foods {
        id
        name
        image {
          id,
          url,
          mimeType
        }
      }
    }
  `
  );


  return {
    props: {
      movies,
      foods
    },
  };
}

export default function Home({ movies, foods } : { movies: any, foods: any}) {

  const isFontReady = useIsFontReady();
  return (
    <div>
      <Head>
        <title>Aashir Khan - I work at Kiwify</title>
      </Head>

      <div className="p-6 lg:p-10 mx-auto container">
        <div className="max-w-2xl">
          <Image
            src={profileImg}
            alt="Profile"
            placeholder="blur"
            priority={true}
            className="rounded-full"
            width={100}
            height={100}
          />

          <h3 className="text-4xl mt-2 font-bold text-gray-900 lg:text-4xl">
            Sup, It's Ash
          </h3>
          <div className="mt-4 text-gray-800">
            <RoughNotationGroup show={isFontReady}>
              <p>
                I lead the front-end team who designed, coded and nurtured the
                dashboard being used by 200,000+ users. currently serving as{" "}
                <RainbowHighlight color={colors[0]}>
                  Head of Product
                </RainbowHighlight>{" "}
                at{" "}
                <a
                  href="https://kiwify.com.br/"
                  className={cx(
                    "font-bold transition-colors hover:text-sky-500",
                    FOCUS_VISIBLE_OUTLINE
                  )}
                >
                  <span className="inline-flex items-center">
                    <img
                      className="h-4 rounded-sm inline mr-1"
                      src="https://assets.brandfetch.io/beff27e3649c4d4.png"
                      alt=""
                    />{" "}
                    Kiwify
                  </span>
                </a>{" "}
                &mdash; focused on creating the best experience for digital
                products seller & buyers.
              </p>
              <p className="mt-2">
                I'm 17, I love watching movies (Moneyball / Good Will Hunting is
                my favorite), and reading books (mostly startup and
                entrepreneurship). I haven't travelled anywhere yet but would
                love to in near future.
              </p>

              <p className="mt-2">Learning Portuguese. (3 months in)</p>

              <p className="mt-2">
                Let's hang out on{" "}
                <a
                  href="https://twitter.com/justaashir"
                  className={cx(
                    "font-bold transition-colors hover:text-sky-500",
                    FOCUS_VISIBLE_OUTLINE
                  )}
                  target="_blank"
                >
                  Twitter
                </a>
                . Email me at{" "}
                <a
                  href="mailto:aashir@justaashir.com"
                  className={cx(
                    "font-bold transition-colors hover:text-sky-500",
                    FOCUS_VISIBLE_OUTLINE
                  )}
                  target="_blank"
                >
                  aashir@justaashir.com
                </a>{" "}
                to have a talk.
              </p>
            </RoughNotationGroup>

            <div className="py-4">
              <div className="text-green-500">
                <RoughNotationGroup show={isFontReady}>
                  <CircleHighlight color={colors[1]}>
                    Last 2 Movies, I watched
                  </CircleHighlight>
                </RoughNotationGroup>
              </div>

              <div className="mt-6 grid grid-cols-1">
                {movies.map((movie: Movie) => {
                  return (
                    <div>
                      <div
                        key={movie.id}
                        className="p-2 rounded-md flex flex-wrap md:flex-nowrap items-center w-full"
                      >
                        <img
                          src={movie.poster.url}
                          className="h-auto md:w-36 w-24 rounded-md"
                          alt=""
                        />
                        <div className="ml-2">
                          <div className="font-medium mt-2">{movie.name}</div>
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-yellow-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <div className="ml-1 text-sm">{movie.rating}</div>
                          </div>
                          <p className="italic text-sm">"{movie.review}"</p>
                          <p className="text-sm mt-1 text-gray-500">
                            Watched on:{" "}
                            {dayjs(movie.watch_date).format("DD MMM YYYY")}
                          </p>
                        </div>
                      </div>

                      <div className="bg-gray-100 h-1 w-48 mx-auto my-2"></div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="py-4">
              <div className="text-green-500">
                <RoughNotationGroup show={isFontReady}>
                  <CircleHighlight color={colors[1]}>
                    My Food Clicks
                  </CircleHighlight>
                </RoughNotationGroup>
              </div>

              <div className="mt-6 grid gap-3 grid-cols-2 md:grid-cols-3">
                {foods.map((food: Food) => {
                  return (
                    <div>
                      <div key={food.id} className="">
                        {food.image.mimeType === "video/mp4" ? (
                          <video
                            width="320"
                            height="240"
                            className="rounded-md"
                            controls
                          >
                            <source src={food.image.url} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <img
                            src={food.image.url}
                            className="h-full w-full rounded-md"
                            alt=""
                          />
                        )}
                      </div>
                    </div>
                  );
                })}

                <a
                  className="flex text-center text-sm font-bold items-center justify-center flex-col border border-pink-600 rounded-md"
                  href="https://www.instagram.com/stories/highlights/17960559016490467/"
                >
                  <img
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png"
                    alt=""
                    className="w-8 h-8 mb-2"
                  />
                  Check more on Instagram
                </a>
              </div>
            </div>

            {/* <Newsletter /> */}

            <div className="mt-10 lg:mt-4 flex flex-col lg:container lg:mx-auto">
              <div className="w-full">Currently listening to:</div>
              <div className="mt-2 w-full">
                <NowPlaying />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
