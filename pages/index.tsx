import Head from "next/head";
import Image from "next/image";
import { useIsFontReady } from "../lib/useIsFontReady";
import cx from "clsx";
import { RoughNotationGroup } from "react-rough-notation";
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
        <title>Aashir Khan - Programmer, writer and mediocre chef</title>
      </Head>

      <div className="px-6 pt-6 lg:pt-10 lg:px-10 mx-auto container">
        <div className="max-w-2xl">
          <Image
            src={profileImg}
            alt="Profile"
            placeholder="blur"
            priority={true}
            className="rounded-md"
            width={100}
            height={100}
          />
          
          <h1 className="text-4xl mt-2 font-bold text-yellow-900 lg:text-4xl">
            { Math.floor(Math.random() * 2) === 0 ?  `E aí, eu sou` : `Sup, It's` } <span style={{fontFamily: 'Kalam'}}>Ash</span>
          </h1>

          <p className="text-yellow-900 text-lg italic">Programmer, writer and a mediocre chef.</p>

          <div className="mt-4">
            <RoughNotationGroup show={isFontReady}>
                <p>
                  <CircleHighlight color={colors[0]}>
                    Head of Product
                  </CircleHighlight>{" "}
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
                  &mdash; focused on creating the best experience for
                  digital creators & consumers. The platform allows users to sell their courses, e-books, community, and physical events. It's one of the biggest platform in 🇧🇷 Brazil with millions of users
                </p> 

                <div className="mt-2">
                  I joined the company in August 2020, to create MVP for the platform as a freelance front-end developer. I was hired full time very soon, and have been leading product since then. 
                  <br/> Here's a Loom to show you some of my work:

                  <div className="mt-4 rounded-md" style={{ position: 'relative', paddingBottom: '55.641421947449764%', height: 0 }}>
                    <iframe
                      src="https://www.loom.com/embed/f088ea13f67f4cab86f4a93738541ec4?sid=96beb689-239d-468f-b9ab-6b9a25661c8e"
                      frameBorder="0"
                      allowFullScreen
                      className="rounded-md border border-dotted border-yellow-900"
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    ></iframe>
                  </div> 

                  <div className="mt-4">
                    <div>
                      Other than this, I used to work as a junior front-end developer at Renetal (Singapore-based, B2B rental management software) before joining Kiwify. 
                    </div>
                  </div> 

                  <div className="mt-2">
                    I also did blogging for a brief amount of time, you can read <a  href="https://dev.to/justaashir" className="underline">my old posts here</a>
                  </div>        

                  <div className="mt-2">
                    When I'm not working, I'm either doing house chores, travelling or watching movies.
                  </div>

                  <div className="mt-2">
                    Wanna talk? Message me on <a href='https://instagram.com/just.aashir/' className="underline">Instagram</a>, or email me at <a href='mailto:aashir@justaashir.com' className="underline">aashir@justaashir.com</a>
                  </div>        

                  <div className="mt-10 lg:mt-4 flex flex-col lg:container lg:mx-auto">
                    <div className="w-full">Currently listening to:</div>
                    <div className="mt-2 w-full">
                      <NowPlaying />
                    </div>
                  </div>
                </div>   
            </RoughNotationGroup>
          </div>
        </div>
      </div>
    </div>
  )
}
