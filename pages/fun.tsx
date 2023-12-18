import Head from "next/head";
import Image from "next/image";
import { useIsFontReady } from "../lib/useIsFontReady";
import wrapped from "../public/wrapped.webp";
import { RoughNotationGroup } from "react-rough-notation";
import { CircleHighlight } from "../components/CircleHighlight";
const colors = ["#78350f", "#3440eb", "#34eb8c", "#FDE68A"];

export default function Home() {

  const isFontReady = useIsFontReady();
  return (
    <div className="bg-yellow-50 min-h-screen">

      <Head>
        <title>Finding fun - Aashir Khan</title>
      </Head>

      <div className="px-6 pt-6 lg:pt-10 lg:px-10 mx-auto container">
        <div className="max-w-2xl">
          <h1 className="text-4xl mt-2 font-bold text-yellow-900 lg:text-4xl">
            Finding fun, a personal journey
          </h1>
          <p className="mt-4">
            So what's fun? for me, It's still a very vague thing. What others find fun, feels super boring to me most times and what I find fun may not be fun to you. 
            <br/>
            I think the best way to phrase this up would be the things I like to do in my free time. Here are some of them:
          </p>

          <div className="mt-4">
            <RoughNotationGroup show={isFontReady}>
            I don't have time right now to add sections here right now that would show my favorite movies, music and books.
            But 
            <a href="https://www.rottentomatoes.com/m/past_lives" target="_blank">
              {" "}<CircleHighlight color={colors[1]}>
              Past lives
              </CircleHighlight>
            </a> is my current favorite movie from 2023 and <a href="https://www.rottentomatoes.com/m/the_banshees_of_inisherin" target="_blank">
              {" "}<CircleHighlight color={colors[2]}>
              The Banshees of Inisherin
              </CircleHighlight> of 2022
            </a>
            </RoughNotationGroup>

            <div className="mt-4">
              Here's my Spotify wrapped 2023:
              <div className="mt-4">
                <Image src={wrapped} alt="" width={250} height={400} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
