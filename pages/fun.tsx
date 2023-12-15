import Head from "next/head";
import { Analytics } from '@vercel/analytics/react';
import Image from "next/image";
import { useIsFontReady } from "../lib/useIsFontReady";
import cx from "clsx";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { CircleHighlight } from "../components/CircleHighlight";
import profileImg from "../public/profile-pic.jpeg";
const colors = ["#78350f", "#BAE6FD", "#C7D2FE", "#FDE68A"];
const FOCUS_VISIBLE_OUTLINE = `focus:text-sky-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 focus-visible:ring-opacity-60 focus-visible:outline-none focus:outline-none  rounded`;
import NowPlaying from "../components/NowPlaying";

export default function Home() {

  const isFontReady = useIsFontReady();
  return (
    <div className="bg-yellow-50 min-h-screen">

      <Head>
        <title>Aashir Khan - Great developer, good writer and mediocre chef.</title>
      </Head>
      <Analytics />

      Coming Soon!
    </div>
  )
}
