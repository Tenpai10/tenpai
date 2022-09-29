import { TextInput, Textarea } from "@mantine/core"
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

function About() {
  return (
    <section className="w-full">
      <div className="flex items-center gap-3">
        <div className="flex-1 h-1 bg-black" />
        <div className="w-fit">
          <h5 className="text-lg font-medium">Software Engineer</h5>
        </div>
      </div>
      <div className="m-4">
        <p className="font-sourceSans text-sm text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
      </div>
    </section>
  )
}

function Technologies() {
  return (
    <section className="w-full">
      <div className="flex items-center gap-3">
        <div className="w-fit">
          <h5 className="text-lg font-medium">Technologies</h5>
        </div>
        <div className="flex-1 h-1 bg-black" />
      </div>
      <div className="m-2 space-y-2">
        <div className="space-y-2">
          <h6 className="text-sm text-justify">Programming Language</h6>
          <div className="flex gap-2">
            <ImageLoader img="/assets/js-logo.png" />
            <ImageLoader img="/assets/ts-logo.png" />
            <ImageLoader img="/assets/python-logo.png" />
            <ImageLoader img="/assets/C-logo.png" />
            <ImageLoader img="/assets/C2-logo.png" />
          </div>
        </div>
        <div className="space-y-2">
          <h6 className="text-sm text-justify">Development Stack</h6>
          <div className="flex gap-2">
            <ImageLoader img="/assets/react-logo.png" />
            <ImageLoader img="/assets/next-logo.jpeg" />
            <ImageLoader img="/assets/vue-logo.png" />
            <ImageLoader img="/assets/prisma-logo.png" />
            <ImageLoader img="/assets/mysql-logo.png" />
            <ImageLoader img="/assets/mongodb-logo.png" />
            <ImageLoader img="/assets/tailwind-logo.png" />
          </div>
        </div>
        <div className="space-y-2">
          <h6 className="text-sm text-justify">Arts and Design</h6>
          <div className="flex gap-2">
            <ImageLoader img="/assets/figma-logo.png" />
            <ImageLoader img="/assets/photoshop-logo.png" />
            <ImageLoader img="/assets/illustrator-logo.png" />
          </div>
        </div>
      </div>
    </section>
  )
}
const ImageLoader = ({ img }: { img: string }) => {
  return (
    <div className="relative w-9 h-9 rounded-md bg-transparent shadow-md">
      <Image
        src={img}
        alt="no image"
        objectFit="cover"
        layout="fill"
        className="rounded-md"
      />
    </div>
  )
}

function Projects() {
  return (
    <section className="w-full">
      <div className="flex items-center gap-3">
        <div className="flex-1 h-1 bg-black" />
        <div className="w-fit">
          <h5 className="text-lg font-medium">Some of my Projects</h5>
        </div>
      </div>
      <div className="m-4 grid grid-cols-2 gap-2">
        <div className="col-span-1 h-36 bg-gray-300 flex flex-col justify-end rounded-tr-xl rounded-bl-xl">
          <div className="bg-gray-400 h-11 w-full rounded-bl-xl"></div>
        </div>
        <div className="col-span-1 h-36 bg-gray-300 flex flex-col justify-end rounded-tr-xl rounded-bl-xl">
          <div className="bg-gray-400 h-11 w-full rounded-bl-xl"></div>
        </div>
        <div className="col-span-1 h-36 bg-gray-300 flex flex-col justify-end rounded-tr-xl rounded-bl-xl">
          <div className="bg-gray-400 h-11 w-full rounded-bl-xl"></div>
        </div>
        <div className="col-span-1 h-36 bg-gray-300 flex flex-col justify-end rounded-tr-xl rounded-bl-xl">
          <div className="bg-gray-400 h-11 w-full rounded-bl-xl"></div>
        </div>
      </div>
    </section>
  )
}

function Contactme() {
  return (
    <section className="w-full">
      <div className="flex items-center gap-3">
        <div className="w-fit">
          <h5 className="text-lg font-medium">Contact me</h5>
        </div>
        <div className="flex-1 h-1 bg-black" />
      </div>
      <div className="m-2 space-y-2">
        <p className="">Care for a collab?</p>
        <form className="space-y-2">
          <TextInput
            placeholder="Your name"
            classNames={{ input: "border focus:outline-none" }}
          />
          <TextInput
            placeholder="Your email"
            classNames={{ input: "border focus:outline-none" }}
          />
          <Textarea
            placeholder="Tell me about it"
            autosize
            minRows={2}
            maxRows={4}
            classNames={{ input: "border focus:outline-none" }}
          />
          <button className="w-full h-10 rounded-md bg-gray-200 flex justify-center items-center">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Arvae Portfolio</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://kit-pro.fontawesome.com/releases/v6.1.1/css/pro.css"
        />
      </Head>

      <nav className="h-8"></nav>
      <main className="flex flex-col gap-3 m-4 items-center min-h-screen font-playfair">
        <div className="flex items-end gap-4 w-full h-44">
          <div className="relative w-40 h-44 rounded-md border">
            <Image
              className="rounded-md"
              src={"/arvae.JPG"}
              alt="no image sorry"
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className="">
            <p className="font-sourceSans">Hello there! I am</p>
            <h1 className="text-4xl font-bold tracking-wide">
              Franz Arvae Ignacio
            </h1>
          </div>
        </div>
        <About />
        <Technologies />
        <Projects />
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
