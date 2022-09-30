import { TextInput, Textarea } from "@mantine/core"

export function Contactme() {
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
