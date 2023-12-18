import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Link from 'next/link' 
import { Analytics } from '@vercel/analytics/react';
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <div className="bg-yellow-50">
      <Component {...pageProps} />

      <Analytics />
      <nav className="sticky w-64 bottom-0 mx-auto pb-4">
        <div className="bg-yellow-50 rounded-md border shadow-lg border-dotted border-yellow-900 px-4 py-1 flex items-center justify-center">
          <Link href="/" passHref>
            <a className={`hover:scale-150 hover:-rotate-6 ease-in cursor-pointer transition-all transform ${router.asPath === '/' ? 'scale-150': ''}`}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" stroke="#ffffff" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1061 22H10.8939C7.44737 22 5.72409 22 4.54903 20.9882C3.37396 19.9764 3.13025 18.2827 2.64284 14.8952L2.36407 12.9579C1.98463 10.3208 1.79491 9.00229 2.33537 7.87495C2.87583 6.7476 4.02619 6.06234 6.32691 4.69181L7.71175 3.86687C9.80104 2.62229 10.8457 2 12 2C13.1543 2 14.199 2.62229 16.2882 3.86687L17.6731 4.69181C19.9738 6.06234 21.1242 6.7476 21.6646 7.87495C22.2051 9.00229 22.0154 10.3208 21.6359 12.9579L21.3572 14.8952C20.8697 18.2827 20.626 19.9764 19.451 20.9882C18.2759 22 16.5526 22 13.1061 22ZM8.39757 15.5532C8.64423 15.2204 9.11395 15.1506 9.44671 15.3973C10.1751 15.9371 11.0542 16.2498 12.0001 16.2498C12.946 16.2498 13.8251 15.9371 14.5535 15.3973C14.8863 15.1506 15.356 15.2204 15.6026 15.5532C15.8493 15.8859 15.7795 16.3557 15.4467 16.6023C14.4743 17.3231 13.2851 17.7498 12.0001 17.7498C10.7151 17.7498 9.5259 17.3231 8.55349 16.6023C8.22072 16.3557 8.15092 15.8859 8.39757 15.5532Z" fill="#a26511"></path> </g></svg>
            </a>
          </Link>

          <Link href="/fun" passHref>
            <a className={`hover:scale-150 hover:-rotate-6 ease-in cursor-pointer ml-8 transition-all transform ${router.asPath === '/fun' ? 'scale-150': ''}`}>
              <svg version="1.1" id="_x35_" xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <g> <g> <g> <circle style={{fill: '#F5DDB2'}} cx="55.093" cy="199.192" r="49.443" /> <circle style={{fill: '#F5DDB2'}} cx="77.402" cy="153.987" r="49.443" /> <circle style={{fill: '#F5DDB2'}} cx="135.507" cy="203.43" r="49.443" /> <circle style={{fill: '#F5DDB2'}} cx="112.303" cy="104.536" r="49.443" /> <circle style={{fill: '#F5DDB2'}} cx="211.79" cy="203.43" r="49.443" /> <circle style={{fill: '#F5DDB2'}} cx="245.792" cy="94.657" r="49.443" /> <circle style={{fill: '#F5DDB2'}} cx="177.279" cy="94.657" r="49.443" /> <circle style={{fill: '#F5DDB2'}} cx="196.349" cy="144.1" r="49.443" /> <circle style={{fill: '#F5DDB2'}} cx="146.906" cy="153.979" r="49.443" /> <circle style={{fill: '#F5DDB2'}} cx="291.698" cy="179.415" r="49.443" /> <circle style={{fill: '#F5DDB2'}} cx="346.088" cy="206.255" r="49.443" /> <circle style={{fill: '#F5DDB2'}} cx="362.027" cy="187.892" r="49.443" /> <circle style={{fill: '#F5DDB2'}} cx="289.511" cy="226.032" r="49.443" /> <path style={{fill: '#F5DDB2'}} d="M401.185,124.304c0,1.876-0.078,3.751-0.312,5.626c-0.156,1.642-0.391,3.283-0.703,4.845 c-0.078,0.548-0.157,1.016-0.312,1.563c-0.313,1.485-0.704,2.971-1.173,4.377c-0.547,1.719-1.172,3.438-1.875,5.08 c-0.625,1.642-1.407,3.204-2.266,4.767v0.078h-0.078c-3.908,7.267-9.456,13.52-16.099,18.209 c-9.066,6.641-20.163,10.549-32.276,10.549c-1.641,0-3.283-0.078-4.923-0.312c-6.565-0.468-12.816-2.188-18.443-4.923 c-2.423-1.094-4.689-2.345-6.877-3.829c-0.704-0.391-1.407-0.859-2.032-1.484c-2.188-1.485-4.22-3.205-6.096-5.003 c-9.065-8.83-15.083-20.631-16.411-33.838c-0.235-1.876-0.312-3.751-0.312-5.705c0-1.016,0-2.032,0.156-3.048 c1.485-28.993,25.555-52.046,54.939-52.046h0.391l14.301,2.032c9.612,2.578,18.131,7.815,24.773,14.769 c0.469,0.469,0.938,0.861,1.328,1.329c0.391,0.39,0.703,0.703,0.938,1.094c0.156,0.156,0.313,0.391,0.469,0.547 c1.329,1.485,2.423,2.97,3.439,4.532c0.782,1.095,1.485,2.188,2.11,3.361c0.313,0.547,0.625,1.094,0.938,1.642 c1.563,2.969,2.891,6.095,3.907,9.378c0.157,0.547,0.313,1.093,0.391,1.641c0,0,0.078,0,0.078,0.078 c0.391,1.251,0.704,2.501,0.938,3.829C400.795,116.957,401.185,120.553,401.185,124.304z" /> <path style={{fill: '#F5DDB2'}} d="M346.794,74.914c0,26.102-18.208,47.983-42.591,53.609c-3.985,1.017-8.206,1.485-12.504,1.485 h-0.391c-3.439,0-6.799-0.39-10.003-1.016c-7.815-1.484-15.004-4.61-21.178-8.986c-6.408-4.455-11.801-10.238-15.708-16.959 c-0.938-1.407-1.719-2.892-2.423-4.454c-3.439-7.191-5.392-15.24-5.392-23.679c0-10.941,3.204-21.101,8.753-29.697 c4.767-7.58,11.488-13.911,19.381-18.287c7.971-4.531,17.115-7.111,26.961-7.111c22.429,0,41.732,13.363,50.25,32.588 l4.533,16.803C346.715,71.085,346.794,72.96,346.794,74.914z" /> <circle style={{fill: '#F5DDB2'}} cx="55.093" cy="136.321" r="55.093" /> <circle style={{fill: '#F5DDB2'}} cx="86.064" cy="100.308" r="55.093" /> <circle style={{fill: '#F5DDB2'}} cx="141.158" cy="62.967" r="55.093" /> <circle style={{fill: '#F5DDB2'}} cx="217.441" cy="55.093" r="55.093" /> <circle style={{fill: '#F5DDB2'}} cx="273.736" cy="167.504" r="49.443" /> <g> <polygon style={{fill: '#D6A048'}} points="88.59,488.164 41.701,488.164 34.902,436.664 19.741,320.848 5.674,214.096 62.879,214.096 66.005,247.388 68.349,272.24 79.603,391.963 87.809,479.646 " /> <polygon style={{fill: '#FFFFFF'}} points="135.507,488.161 88.589,488.161 62.86,214.121 120.07,214.121 " /> <polygon style={{fill: '#D6A048'}} points="182.425,488.161 135.507,488.161 120.07,214.121 177.279,214.121 " /> <polygon style={{fill: '#FFFFFF'}} points="229.343,488.161 182.425,488.161 177.279,214.121 234.489,214.121 " /> <polygon style={{fill: '#D6A048'}} points="276.261,488.161 229.343,488.161 234.489,214.121 291.698,214.121 " /> <polygon style={{fill: '#FFFFFF'}} points="323.179,488.161 276.261,488.161 291.698,214.121 348.908,214.121 " /> <polygon style={{fill: '#D6A048'}} points="370.097,488.161 323.179,488.161 348.908,214.121 406.117,214.121 " /> </g> <rect x="41.701" y="480.818" style={{fill: '#F2F2F2'}} width="328.459" height="31.182" /> </g> </g> <path style={{opacity: '0.3', fill: '#E3991A'}} d="M249.102,73.698c0-6.089-4.982-11.07-11.071-11.07c-3.305,0-6.248,1.497-8.281,3.812 c-1.783-3.738-5.572-6.355-9.969-6.355c-3.026,0-5.776,1.234-7.779,3.219c-2.004-1.985-4.753-3.219-7.779-3.219 c-6.089,0-11.071,4.982-11.071,11.07c0,5.32,3.803,9.792,8.825,10.838c-0.234,0.893-0.398,1.812-0.398,2.775 c0,6.089,4.982,11.07,11.071,11.07c2.978,0,5.68-1.204,7.675-3.134c1.077,0.352,2.204,0.592,3.395,0.592 c0.064,0,0.124-0.018,0.188-0.019c2.017,2.776,5.264,4.607,8.937,4.607c6.089,0,11.071-4.981,11.071-11.07 c0-1.211-0.246-2.358-0.609-3.451C246.737,81.476,249.102,77.869,249.102,73.698z" /> <path style={{opacity: '0.3', fill: '#E3991A'}} d="M304.453,163.564c2.755,5.736,9.702,8.175,15.438,5.42 c3.113-1.495,5.209-4.237,6.077-7.339c3.371,2.715,8.125,3.466,12.267,1.477c2.851-1.369,4.883-3.776,5.872-6.552 c2.786,0.963,5.934,0.882,8.785-0.487c5.736-2.755,8.175-9.702,5.421-15.438c-2.407-5.012-8.014-7.504-13.218-6.217 c-0.183-0.947-0.445-1.887-0.881-2.795c-2.755-5.736-9.702-8.175-15.438-5.42c-2.805,1.347-4.807,3.704-5.813,6.425 c-1.174,0.156-2.344,0.44-3.466,0.979c-0.06,0.029-0.109,0.073-0.169,0.103c-3.156-1.702-7.044-1.958-10.504-0.296 c-5.736,2.755-8.176,9.702-5.421,15.438c0.548,1.141,1.298,2.11,2.135,2.976C303.162,155.166,302.566,159.634,304.453,163.564z" /> <path style={{opacity: '0.3', fill: '#E3991A'}} d="M74.517,136.069c-3.392,5.968-1.284,13.626,4.684,17.018 c3.239,1.841,6.958,2.014,10.241,0.877c-0.335,4.657,1.921,9.333,6.231,11.783c2.966,1.686,6.349,2.008,9.418,1.178 c0.858,3.062,2.865,5.803,5.831,7.489c5.968,3.392,13.627,1.285,17.019-4.683c2.964-5.214,1.728-11.717-2.612-15.539 c0.727-0.744,1.4-1.554,1.937-2.498c3.392-5.968,1.284-13.626-4.683-17.019c-2.919-1.659-6.238-1.984-9.269-1.204 c-0.86-0.945-1.831-1.808-2.998-2.471c-0.063-0.036-0.132-0.052-0.195-0.086c-0.43-3.844-2.593-7.448-6.193-9.494 c-5.968-3.392-13.626-1.285-17.018,4.682c-0.675,1.187-1.073,2.448-1.326,3.722C81.169,129.763,76.841,131.981,74.517,136.069z" /> <path style={{opacity: '0.06', fill: '#040000'}} d="M41.701,488.165v5.001v10.237h10.238H370.16V487.93l35.949-273.833h-2.188 c1.25-1.954,2.345-4.064,3.36-6.252c0.313-0.782,0.625-1.563,0.938-2.344c0.86-2.266,1.641-4.611,2.11-7.112 c0.234-0.86,0.391-1.719,0.469-2.579c0.156-0.391,0.235-0.86,0.235-1.25c0-0.156,0.078-0.391,0.078-0.547 c0.078-0.703,0.156-1.407,0.234-2.032c0-0.078,0-0.235,0-0.313c0.078-1.25,0.156-2.501,0.156-3.751 c0-1.407-0.078-2.735-0.156-4.142c-0.078-0.469-0.078-0.938-0.156-1.407c-0.078-1.094-0.234-2.188-0.547-3.282 c0-0.469-0.156-0.86-0.234-1.328c-0.234-1.172-0.469-2.345-0.938-3.517c0-0.078,0-0.156,0-0.234 c-0.078-0.234-0.078-0.547-0.234-0.782c0-0.156-0.078-0.234-0.156-0.391c-0.234-0.938-0.547-1.797-0.938-2.657 c-0.234-0.703-0.469-1.407-0.86-2.11c0-0.078,0-0.078-0.078-0.156c-0.313-0.86-0.703-1.719-1.172-2.501 c-0.625-1.25-1.25-2.423-2.032-3.595c-0.625-1.016-1.25-2.032-2.032-2.97c-0.234-0.391-0.547-0.782-0.86-1.172 c-0.703-1.016-1.485-1.954-2.423-2.813c-0.234-0.391-0.547-0.703-0.86-1.016l-0.078-0.078c-0.781-0.86-1.485-1.563-2.345-2.266 c-0.234-0.313-0.547-0.625-0.86-0.86v-0.078c0.86-1.563,1.641-3.126,2.266-4.767c0.703-1.641,1.328-3.36,1.875-5.08 c0.469-1.407,0.86-2.892,1.172-4.376c0.156-0.547,0.234-1.016,0.313-1.563c0.313-1.563,0.547-3.204,0.703-4.845 c0.234-1.876,0.313-3.751,0.313-5.627c0-3.751-0.391-7.346-1.094-10.863c-0.234-1.328-0.547-2.579-0.938-3.829 c0-0.078-0.078-0.078-0.078-0.078c-0.078-0.547-0.234-1.094-0.391-1.641c-1.016-3.282-2.344-6.408-3.907-9.378 c-0.313-0.547-0.625-1.094-0.938-1.641c-0.625-1.172-1.328-2.266-2.11-3.36c-1.016-1.563-2.11-3.048-3.438-4.533 c-0.156-0.156-0.313-0.391-0.469-0.547c-0.625-0.86-1.407-1.641-2.188-2.501l-0.078,0.078l-5.001,5.002l-53.688,53.688 l-6.486,6.486l-12.66,12.66l-12.973,12.973l-34.151,34.151l-3.126,3.126l-0.469,0.469l-16.724,16.724l-6.252,6.252l-14.692,14.692 l-40.559,40.559l-51.344,51.344l-47.827,47.827l-44.701,44.701L41.701,488.165z" /> </g> </g></svg>
            </a>
          </Link>

          <Link href="/blog" passHref>
            <a className={`hover:scale-150 hover:-rotate-6 ease-in cursor-pointer ml-8 transition-all transform ${router.asPath === '/blog' ? 'scale-150': ''}`}>
              <svg className="h-9 w-9" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <style type="text/css" dangerouslySetInnerHTML={{__html: "  .st0{fill:#a26511;}  " }} /> <g> <path className="st0" d="M473.818,0.003c0,0-18.578,28.297-139.938,70.172c-123.719,42.688-199.875,216.406-199.875,216.406 c-18.344,35.578-90.813,183.453-90.813,183.453c-19.953,38.172,16.625,60.734,38.063,21.313 c41.156-75.703,67.688-144.875,130.25-146.844c91.219-2.875,153.609-84.109,133.984-80.359 c-25.844,11.484-82.781,0.875-49.234-4.391c80.531-6.594,130.125-68.297,113.969-72.5c-28.563,11.219-55.172,0.578-60.391-2.656 C491.959,166.987,473.818,0.003,473.818,0.003z" /> </g> </g></svg>
            </a>
          </Link>
        </div>
      </nav>
    </div>
  )
}
export default MyApp
