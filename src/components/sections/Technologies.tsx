import { ImageLoader } from "../ImageLoader"

function Rating({ star }: { star: number }) {
  const rate = new Array(5).fill("*")

  return (
    <div className="flex-1 h-2 grid grid-cols-5 w-full">
      {rate.map((i, idx) => (
        <div
          key={idx}
          className={`col-span-1 h-2 border ${
            idx < star
              ? "bg-neutral-400 border-neutral-500/40"
              : "border-neutral-400/50"
          }`}
        />
      ))}
    </div>
  )
}

function Technology({ img, star }: { img: string; star: number }) {
  return (
    <div className="flex items-center gap-2 w-full">
      <ImageLoader img={img} />
      <Rating star={star} />
    </div>
  )
}

export function Technologies() {
  return (
    <section className="w-full">
      <div className="flex items-center gap-4">
        <div className="w-fit">
          <h5 className="text-lg md:text-2xl font-medium">Technology Stack</h5>
        </div>
        <div className="flex-1 h-1 bg-black" />
      </div>
      <div className="m-2 grid grid-cols-3 gap-2 md:gap-6">
        <div className="space-y-2">
          <h6 className="text-sm md:text-xl">Programming</h6>
          <div className="flex flex-col gap-2 justify-center items-center">
            <Technology img="/assets/js-logo.png" star={5} />
            <Technology img="/assets/ts-logo.png" star={4} />
            <Technology img="/assets/python-logo.png" star={4} />
            <Technology img="/assets/C2-logo.png" star={4} />
            <Technology img="/assets/C-logo.png" star={3} />
          </div>
        </div>
        <div className="space-y-2">
          <h6 className="text-sm md:text-xl">Development</h6>
          <div className="flex flex-col gap-2 justify-center items-center">
            <Technology img="/assets/react-logo.png" star={5} />
            <Technology img="/assets/next-logo.jpeg" star={5} />
            <Technology star={5} img="/assets/tailwind-logo.png" />
            <Technology img="/assets/svelte-logo.png" star={2} />
            <Technology img="/assets/vue-logo.png" star={2} />
            <Technology img="/assets/prisma-logo.png" star={3} />
            <Technology star={3} img="/assets/mysql-logo.png" />
            <Technology star={2} img="/assets/mongodb-logo.png" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="space-y-2">
            <h6 className="text-sm md:text-xl">Designing</h6>
            <div className="flex flex-col gap-2 justify-center items-center">
              <Technology star={5} img="/assets/figma-logo.png" />
              <Technology star={5} img="/assets/photoshop-logo.png" />
              <Technology star={3} img="/assets/illustrator-logo.png" />
            </div>
          </div>
          <div className="space-y-2">
            <h6 className="text-sm md:text-xl">Management</h6>
            <div className="flex flex-col gap-2 justify-center items-center">
              <Technology star={5} img="/assets/github-logo.png" />
              <Technology star={5} img="/assets/trello-logo.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
