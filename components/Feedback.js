import { ExtLink, Input, TextArea } from './Atoms'

export default function Feedback() {
  return (
    <>
      <div className="full-width-container bg-back-secondary mt-32">
        <div className="container mx-auto max-w-xl px-8 pt-16 pb-2 text-gray-900">
          <h6 className="text-accent text-center text-xl font-semibold">A small favor</h6>
          <p className="text-fore-subtle mx-auto mt-2 text-center">
            Is this post confusing? Did I make a mistake? Let me know if you have any feedback and
            suggestions!
          </p>
          <form className="mt-3 grid grid-cols-1 gap-3">
            <input type="hidden" name="_subject" />
            <TextArea
              labelText="Message"
              id="message"
              name="message"
              placeholder="What's your feedback?"
              required
            />
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
              <Input
                labelText="(Optional) Email"
                id="email"
                name="email"
                placeholder="hey@email.com"
                type="email"
              />
              <Input
                labelText="(Optional) Twitter Handle"
                id="twitter"
                name="twitter"
                placeholder="@twitter"
                type="twitter"
              />
            </div>

            <button
              type="submit"
              className="bg-200 text-back-secondary mt-8 focus-visible:outline-accent rounded-md bg-gradient-to-r from-teal-500 to-blue-500 bg-left py-3 font-semibold transition-all duration-[0.5s] ease-out hover:bg-right disabled:opacity-50"
            >Shoot 🚀</button>
          </form>
        </div>
      </div>
    </>
  )
}
