import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { About } from "../components/sections/About"
import { Technologies } from "../components/sections/Technologies"
import { Contactme } from "../components/sections/Contactme"
import { Projects } from "../components/sections/Projects"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Arvae Portfolio</title>
        <meta name="description" content="Franz Arvae Ignacio Web Portfolio" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://kit-pro.fontawesome.com/releases/v6.1.1/css/pro.css"
        />
      </Head>

      <nav className="h-8 md:h-12"></nav>
      <main className="flex flex-col gap-3 md:gap-4 m-6 items-center min-h-screen font-playfair">
        <div className="flex items-end gap-4 w-full h-44">
          <div className="relative w-40 h-44 md:w-40 md:h-52 rounded-md border">
            <Image
              className="rounded-md"
              src={"/arvae.JPG"}
              alt="no image sorry"
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className="">
            <p className="font-sourceSans md:text-xl">Hello there! I am</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">
              Franz Arvae Ignacio
            </h1>
          </div>
        </div>
        <About />
        <Technologies />
        {/* <Projects /> */}
        <Contactme />
      </main>
      <footer className="bg-[#27272A] text-neutral-300 font-sourceSans h-36 flex justify-center items-center p-6">
        <div className="flex flex-col">
          <p className="flex gap-2 items-center">
            <i className="fa-regular fa-mobile-notch"></i>09292045190
          </p>
          <p className="flex gap-2 items-center">
            <i className="fa-sharp fa-solid fa-envelope"></i>
            franzarvae.ignacio@gmail.com
          </p>
          <p className="flex gap-2 items-center">
            <i className="fa-brands fa-github"></i>github.com/Tenpai10
          </p>
          <p className="flex gap-2 items-center">
            <i className="fa-brands fa-linkedin"></i>linkedin.com/in/franz-arvae
          </p>
        </div>
      </footer>
    </>
  )
}

export default Home
