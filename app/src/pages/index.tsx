import styles from "src/styles/Home.module.css"
import Image from "next/legacy/image"
import Head from "next/head"
import { useRouter } from "next/router"
import { Anchor, Center, Box } from "@mantine/core"
import { FooterCentered } from "src/core/components/Footer"

export function Front({ url, text }) {
  const router = useRouter()
  return (
    <Anchor
      size="xl"
      onClick={() => {
        router.push(url)
      }}
    >
      <Center inline>
        <Box mr={5}>{text}</Box>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-arrow-right"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l14 0" />
          <path d="M13 18l6 -6" />
          <path d="M13 6l6 6" />
        </svg>
      </Center>
    </Anchor>
  )
}

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CSE3002 | Home</title>
      </Head>
      <div className="relative h-full overflow-hidden md:pt-24 md:mt-[-9%]">
        <div className="absolute inset-0 opacity-25"></div>
        <div className="container relative z-10 mx-auto my-24 flex w-4/5 items-center rounded-lg border-4 border-white py-16 md:my-32">
          <div className="relative z-10 flex w-full flex-col items-center justify-between gap-4">
            <p className="flex flex-col items-center text-center text-6xl font-semibold md:text-8xl pb-4">
              Fall Detection System
            </p>
            <Front text={"Go to Dashboard"} url={"/dashboard"} />
            <p className="mt-6 flex max-w-lg flex-col items-center text-center text-2xl font-semibold ">
              CSE3002 Internet and Web Programming <br />J Component
            </p>
            <div className="mt-6 flex max-w-lg flex-col items-center text-center text-3xl font-semibold">
              Presented By <br />
              <div className="p-5 flex flex-row items-center justify-center gap-4 w-full font-bold">
                <p className="text-xl">Siddharth Suresh 20BPS1042</p>
                <p className="text-xl">Prantik Dhara 20BPS1083</p>
                <p className="text-xl">Kanishka Ghosh 20BPS1125</p>
              </div>
            </div>
            <div className="p-5 flex flex-row gap-5 w-xl justify-between">
              <button
                type="button"
                className="shadow-white/50 py-2 px-4 flex justify-center items-center  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                style={{
                  backgroundColor: "rgba(0,0,0,0.05)",
                  backdropFilter: "blur(5px)",
                  borderRadius: "20px",
                }}
                onClick={() => {
                  window.open("https://github.com/siddhsuresh/Cloud-Project-Frontend")
                }}
              >
                <svg
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="mr-2"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                </svg>
                Frond End Code
              </button>
              <button
                type="button"
                className="shadow-white/50 py-2 px-4 flex justify-center items-center  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                style={{
                  backgroundColor: "rgba(0,0,0,0.05)",
                  backdropFilter: "blur(5px)",
                  borderRadius: "20px",
                }}
                onClick={() => {
                  window.open("https://github.com/siddhsuresh/Cloud-Project-Backend")
                }}
              >
                <svg
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="mr-2"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                </svg>
                API & Microcontroller Code
              </button>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold sm:text-6xl text-center sm:text-left">Features</h2>

            <p className="mt-4 sm:text-xl">
              Listing the various key aspects implemented for the working of the fall detection
              system
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-10 mt-8 sm:grid-cols-4 lg:grid-cols-4">
            <li
              className="p-8 shadow-2xl rounded-xl col-span-2"
              style={{
                backdropFilter: "blur(5px)",
              }}
            >
              <p className="text-3xl font-semibold">Implemented the BackEnd API using FastAPI</p>
              <p className="mt-3 text-xl font-medium flex flex-row gap-4">Hosted in Render</p>
            </li>

            <li
              className="p-8 shadow-2xl rounded-xl col-span-2"
              style={{
                backdropFilter: "blur(5px)",
              }}
            >
              <p className="text-3xl font-semibold">
                Implemented the Real Time <br />
                Bi-Directional Connection
              </p>
              <p className="mt-3 text-xl font-medium flex flex-row gap-4">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMinYMin meet"
                >
                  <circle
                    cx="128"
                    cy="128"
                    r="114"
                    stroke="#010101"
                    strokeWidth="20"
                    fill="#ffffff"
                  />
                  <path
                    d="M97.637 121.69c27.327-22.326 54.058-45.426 81.98-67.097-14.646 22.505-29.708 44.711-44.354 67.215-12.562.06-25.123.06-37.626-.119zM120.737 134.132c12.621 0 25.183 0 37.745.179-27.505 22.206-54.117 45.484-82.099 67.096 14.646-22.505 29.708-44.77 44.354-67.275z"
                    fill="#010101"
                  />
                </svg>
                Using Web Socket Protocol
              </p>
            </li>
            <div className="col-span-4 flex items-center justify-center">
              <li
                className="p-8 shadow-2xl rounded-xl w-[50%]"
                style={{
                  backdropFilter: "blur(5px)",
                }}
              >
                <p className="text-3xl font-semibold">
                  Fall Classification Using Random Forest Machine Learning Algorithm
                </p>
                <p className="mt-3 text-xl font-medium flex flex-row gap-4">
                  Using scikit-learn and pandas libraries
                </p>
              </li>
            </div>
            <li
              className="p-8 shadow-2xl rounded-xl col-span-2"
              style={{
                backdropFilter: "blur(5px)",
              }}
            >
              <p className="text-3xl font-semibold">
                Created This Website using Next.js and Blitz Toolkit
              </p>
              <p className="mt-3 text-xl font-medium flex flex-row gap-2">
                Hosted in
                <svg height="26" viewBox="0 0 284 65" aria-label="Vercel Logotype">
                  <path
                    fill="#fff"
                    d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
                  ></path>
                </svg>
              </p>
            </li>

            <li
              className="p-8 shadow-2xl rounded-xl col-span-2"
              style={{
                backdropFilter: "blur(5px)",
              }}
            >
              <p className="text-3xl font-semibold">
                Written the Microcontroller Code using the Arduino Framework
              </p>
              <p className="mt-3 text-xl font-medium">
                The Tasks in ESP32 is implemented using the ESP32 SDK{" "}
              </p>
            </li>
          </ul>
        </div>
      </section>
      <FooterCentered />
      <style jsx global>
        {`
          .buttons {
            display: grid;
            grid-auto-flow: column;
            grid-gap: 0.5rem;
          }
          .button {
            font-size: 1rem;
            background-color: #6700eb;
            padding: 1rem 2rem;
            color: #f4f4f4;
            text-align: center;
          }
          .button.small {
            padding: 0.5rem 1rem;
          }
          .button:hover {
            background-color: #45009d;
          }
          .button-outline {
            border: 2px solid #6700eb;
            padding: 1rem 2rem;
            color: #6700eb;
            text-align: center;
          }
          .button-outline:hover {
            border-color: #45009d;
            color: #45009d;
          }
        `}
      </style>
    </div>
  )
}

Index.suppressFirstRenderFlicker = true
