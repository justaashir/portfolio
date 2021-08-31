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

            <div className="p-4 border flex items-center flex-wrap justify-between rounded-md relative bg-gray-50 my-10">
              <div className="w-5/12 mx-auto lg:mb-0 mb-4">
                <img src="/mail.svg" alt="" />
              </div>

              <div>
                <h3 className="mb-4 text-lg lg:text-xl text-gray-800 font-medium">
                  Subscribe to my{" "} {""}
                  <RoughNotationGroup show={isFontReady}>
                    <a href="https://www.getrevue.co/profile/justaashir">
                      <CircleHighlight color={colors[1]}>
                        Newsletter
                      </CircleHighlight>{" "}
                    </a>
                  </RoughNotationGroup>
                </h3>
                <form
                  action="https://www.getrevue.co/profile/justaashir/add_subscriber"
                  method="post"
                  name="revue-form"
                  target="_blank"
                >
                  <div className="w-full lg:w-80">
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-400 sm:text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </span>
                      </div>
                      <input
                        placeholder="What should I call you? (Your Name)"
                        name="member[first_name]"
                        id="member_name"
                        type="text"
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-12 sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-80 mt-4">
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-400 sm:text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </span>
                      </div>
                      <input
                        placeholder="Your email address..."
                        name="member[email]"
                        id="member_email"
                        type="email"
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-12 sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="submit"
                      value="Subscribe"
                      name="member[subscribe]"
                      className="bg-black mt-4 py-2.5 px-6 border border-gray-800 rounded-md shadow-sm text-sm leading-4 font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    />

                    <div className="text-sm text-gray-800 mt-4">
                      <RoughNotationGroup show={isFontReady}>
                        <RainbowHighlight color={colors[3]}>
                          I hate Spam
                        </RainbowHighlight>{" "}
                        as much as you do! You can trust me.
                      </RoughNotationGroup>
                    </div>
                  </div>

                  {/* <div className="revue-form-actions">
                <input type="submit" value="Subscribe" name="member[subscribe]" id="member_submit" />
              </div>
              <div className="revue-form-footer">By subscribing, you agree with Revue’s <a target="_blank" href="https://www.getrevue.co/terms">Terms of Service</a> and <a target="_blank" href="https://www.getrevue.co/privacy">Privacy Policy</a>.</div> */}
                </form>
              </div>
            </div>

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
