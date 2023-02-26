import styles from "src/styles/Home.module.css"
import Image from "next/image"
import Head from "next/head"
import { useRouter } from "next/router"
import { Anchor, Center, Box } from "@mantine/core"
import { FooterCentered } from "src/core/components/Footer"
import { Back } from "./auth/forgot-password"
import { Routes } from "@blitzjs/next"

export default function Architecture() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CSE3002 | Achitecture</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center">
        <div className="m-10 prose lg:prose-xl !prose-invert font-serif">
          <Back url={Routes.Index()} text="Back To Home Page" />
          <h1 className="prose-invert pt-5">Architecture Of the Fall Detection System</h1>
          <h2>Hardware Stack</h2>
          <h3>Visualising the ESP32 Circuit</h3>
          <p>Circuit Visulisation using Fritzing Software</p>
          <p>
            The Components connected to the ESP32 Microcontroller is MPU6050 Accerometer and
            Gyroscope
          </p>
          <div className="bg-white flex items-center justify-center rounded-xl">
            <Image src="/1.png" width={400} height={300} className="!p-5" alt="" />
          </div>
          <h2>Software Stack</h2>
          <h3>Visualising the Software Architecture</h3>
          <div className="bg-white flex items-center justify-center rounded-xl">
            <Image
              src="/Architecture.excalidraw.png"
              width={1300}
              height={800}
              className="!p-5 !rounded-[2.75rem]"
              alt=""
            />
          </div>
        </div>
      </div>
      <FooterCentered />
    </div>
  )
}
