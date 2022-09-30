import Image from "next/image"

export function Projects() {
  return (
    <section className="w-full">
      <div className="flex items-center gap-3">
        <div className="flex-1 h-1 bg-black" />
        <div className="w-fit">
          <h5 className="text-lg font-medium">Some of my Projects</h5>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-36 h-36 relative">
          <Image
            className=""
            src={"/assets/wip-logo.png"}
            alt="no image sorry"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>
      {/* <div className="m-4 grid grid-cols-2 gap-2">
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
      </div> */}
    </section>
  )
}
