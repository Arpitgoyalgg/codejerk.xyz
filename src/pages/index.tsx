import { Fragment, useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import { Blob } from '@/components/atoms'
import { SEO } from '@/components/seo'
import { Blog24, Project24 } from '@/components/icons'
import { PostList } from '@/components/postList'
import Quote from '@/components/quote'
import { CustomArrowDown } from '@/components/atoms'
import { Contact } from '@/components/contact'
import { getAllFrontMatters } from '@/lib/mdx'



export default function IndexPage({
  posts,
  geoLocationData,
  binData,
}) {
  const [count, setCount] = useState(binData.record.count)
  const geo = geoLocationData
  const [existingBinData, setExistingBinData] = useState(binData.record)
  const isMounted= useRef(false)

  function handleCountCountry() {
    // if (count != 0) {
    //   return
    // }
    setCount(count + 1)
  }

  useEffect(() => {
    if (isMounted.current) {
      let prevGeo = existingBinData.geoData
    prevGeo.push(geo)
    let newData = {
      ...existingBinData,
      count: count,
      geoData: prevGeo,
      
    }

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newData),
    }
    fetch(
      'https://api.jsonbin.io/v3/b/62d97a21248d43754ffe585b',
      requestOptions
    )
      .then(response => response.json())
      .then(data => console.log('Getting sneaky, huh?'))
    }
    else {
      isMounted.current = true
    }
    
  }, [count])

  return (
    <Fragment>
      <SEO />
      <div className="flex flex-col-reverse items-center md:mt-12 lg:flex-row lg:justify-between lg:space-x-6">
        <p className="max-w-3xl mt-12 text-3xl font-semibold lg:mt-0 sm:text-4xl sm:text-left md:text-center lg:text-left">
          Hi, I’m Arpit. I’m a web developer and an AWS Certified Cloud
          Practitioner.
          <br />
          <br />
          Also an undergrad engineering student in India.
        </p>

        <div>
          <div className="flex items-center justify-center w-full h-full">
            <div className="w-32 h-32 overflow-hidden rounded-lg md:h-40 md:w-40 lg:h-48 lg:w-48">
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
          <div className="mt-2 ml-2">
            Here's someone greeting.{' '}
            <span className="text-pink-600">
              <b>Cute, right?</b>
            </span>
            <div
              className="text-center mt-2 animate-bounce"
              onClick={handleCountCountry}
            >
              💖 {count}
            </div>
          </div>
        </div>
      </div>
      <Link href="/about">
        <p className="mt-5">
          <a className="text-2xl text-pink-600 hover:bg-pink-400 hover:text-white">
            More about me &rarr;
          </a>
        </p>
      </Link>
      <CustomArrowDown />
      <div className="mt-46">
        <Quote />
      </div>
      <CustomArrowDown />

      <div className="flex items-center mt-40 md:mt-52 mb-8 space-x-3">
        <span className="p-3 rounded-full bg-back-subtle">
          <Blog24 />
        </span>
        <span className="mt-3 mb-2 uppercase tracking-widestest text-accent">
          A few of the recent posts
        </span>
      </div>
      <PostList posts={posts} homePage={true} />
      <Link href="/blog">
        <p className="mt-5">
          <a className="text-2xl text-pink-600 hover:bg-pink-400 hover:text-white">
            All posts &rarr;
          </a>
        </p>
      </Link>
      {/* <div className="flex items-center mt-24 mb-8 space-x-3">
        <span className="p-3 rounded-full bg-back-subtle">
          <Project24 />
        </span>
        <span className="mt-3 mb-2 uppercase tracking-widestest text-accent">
          PROJECTS
        </span>
      </div>
      <ProjectList projects={projects} /> */}
      <Contact />
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllFrontMatters()
  // const projects = await getProjects()

  const resGeo = await fetch('https://geolocation-db.com/json/')
  const geoLocationData = await resGeo.json()

  const resBin = await fetch(
    'https://api.jsonbin.io/v3/b/62d97a21248d43754ffe585b/latest'
  )
  const binData = await resBin.json()

  return {
    props: { posts, geoLocationData, binData },
  }
}
