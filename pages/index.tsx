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
import Newsletter from "../components/NewsletterWidget";


export default function Home() {

  const isFontReady = useIsFontReady();
  return (
    <div>
      <Head>
        <title>Aashir Aamir Khan - Ash</title>
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
