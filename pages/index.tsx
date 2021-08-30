import Head from "next/head";
import Image from "next/image";
import { useIsFontReady } from "../lib/useIsFontReady";
import cx from "clsx";
import { RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "../components/RainbowHighlight";
import profileImg from "../public/profile-pic.jpeg";
const colors = ["#A7F3D0", "#BAE6FD", "#C7D2FE", "#FDE68A"];
const FOCUS_VISIBLE_OUTLINE = `focus:text-sky-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 focus-visible:ring-opacity-60 focus-visible:outline-none focus:outline-none  rounded`;
import NowPlaying from "../components/NowPlaying";


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
            <RoughNotationGroup show={true}>
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
                      src="https://bookface-images.s3.amazonaws.com/logos/f0d29bfab4a8944092d4bd86a62ec87e88e3d9ed.png"
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

              <p className="mt-2">Learning Portuguese. (2 months in)</p>

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

            <div className="mt-10 lg:mt-4 flex flex-col lg:absolute bottom-0 left-0 right-0 lg:p-10 lg:container lg:mx-auto">
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
