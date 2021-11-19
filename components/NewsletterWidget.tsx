import { RainbowHighlight } from "./RainbowHighlight";
import { CircleHighlight } from "./CircleHighlight";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
const colors = ["#A7F3D0", "#BAE6FD", "#C7D2FE", "#FDE68A"];

export default function Newsletter() {
  return (
    <div className="p-4 border flex items-center flex-wrap justify-between rounded-md relative bg-gray-50 my-10">
      <div className="w-5/12 mx-auto lg:mb-0 mb-4">
        <img src="/mail.svg" alt="" width="400" height="400" />
      </div>

      <div>
        <h3 className="mb-4 text-lg lg:text-xl text-gray-800 font-medium">
          Subscribe to my {""}
          <RoughNotationGroup show={true}>
            <a href="https://www.getrevue.co/profile/justaashir">
              <CircleHighlight color={colors[1]}>Newsletter</CircleHighlight>{" "}
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
              <RoughNotationGroup show={true}>
                <RainbowHighlight color={colors[3]}>
                  I hate Spam
                </RainbowHighlight>{" "}
                as much as you do! You can trust me.
              </RoughNotationGroup>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
