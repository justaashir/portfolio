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
        <title>Blog - Aashir Khan</title>
      </Head>

      <div className="px-6 pt-6 lg:pt-10 lg:px-10 mx-auto container">
        <div className="max-w-2xl">
          <h1 className="text-4xl mt-2 font-bold text-yellow-900 lg:text-4xl">
            Blog
          </h1>
          <p className="text-yellow-900 text-lg italic">Sometimes I write my thoughts, and put it on the internet</p>

          <div className="mt-8">
            <h3 className="text-2xl mt-2">
              2023
            </h3>
          
            <div className="mt-4">
              <ul className="list-inside list-disc">
                <li className="underline cursor-pointer">My curiosity about Michael Jordan and Stephen King</li>
                <li className="underline cursor-pointer">Anything you want by Derek Sivers: My true favorite startup book</li>
                <li className="underline cursor-pointer">Where do ideas and writing comes for me? One word: Triggers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
