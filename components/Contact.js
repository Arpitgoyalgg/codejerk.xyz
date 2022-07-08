import { ExtLink, Button } from './Atoms'

export default function Contact() {
  return (
    <>
      <div className="full-width-container bg-back-secondary mt-32">
        <div className="container mx-auto max-w-screen-xl pt-16">
          <h1 className="text-center text-3xl font-semibold">
            Get in touch{' '}
            <span role="img" aria-label="wave">
              👋
            </span>
          </h1>
          <p className="text-fore-secondary mt-4 px-4 text-center">
            Feel free to email me about anything. Do you have some feedback or suggestions?
          </p>
          <p className="text-fore-secondary mt-1 px-4 text-center">
            You can also reach me around the web:{' '}
            <ExtLink link="https://github.com/arpitgoyalgg">GitHub</ExtLink>,{' '}
            <ExtLink link="https://twitter.com/arpitgoyalgg">Twitter</ExtLink>
          </p>
          <div className="mx-auto flex justify-center pt-10 pb-2">
            <Button link="mailto:arpitgoyalgg@gmail.com">
              <span className="text-back-secondary text-2xl font-semibold">Say hello</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
