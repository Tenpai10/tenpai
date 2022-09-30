import Image from "next/image"

export const ImageLoader = ({ img }: { img: string }) => {
  return (
    <div className="relative w-9 h-9 md:w-12 md:h-12 rounded-md bg-transparent shadow-md">
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
