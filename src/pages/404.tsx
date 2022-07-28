import { Fragment } from 'react'
import Image from 'next/image'

function NotFoundPage() {
  return (
    <Fragment>
      <div className="flex justify-center">
        <div>
        <Image
                src="/images/giphy.webp"
                alt="My avatar"
                width={256}
                height={256}
                quality={100}
                priority={true}
              />
        </div>
      </div>
      <p className="mt-24 text-2xl font-medium text-center lg:mt-36 text-fore-secondary">
        Page not found. The page you’re looking for does not exist.
      </p>
    </Fragment>
  )
}

export default NotFoundPage
