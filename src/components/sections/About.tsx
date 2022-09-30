export function About() {
  return (
    <section className="w-full">
      <div className="flex items-center gap-3">
        <div className="flex-1 h-1 bg-black" />
        <div className="w-fit">
          <h5 className="text-lg md:text-2xl font-medium">Software Engineer</h5>
        </div>
      </div>
      <div className="m-4">
        <p className="font-sourceSans text-sm md:text-base text-justify">
          {`I love using the extent of my creativity when creating breakthrough
          innovations and software programs. I excel most at developing
          Progressive Web Applications, specifically on front end duties such as
          UI/UX designs and development. I graduated at Technological University
          of the Philippines - Manila in 2022, with a Bachelor's Degree in
          Information Technology, and here I am today, currently working as
          Digital and Software Solutions Architect since July, 2022.`}
        </p>
      </div>
    </section>
  )
}
