import { Fragment, useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Blob } from '@/components/atoms'
import { SEO } from '@/components/seo'
import { Blog24, Project24 } from '@/components/icons'
import { PostList } from '@/components/postList'
import Quote from '@/components/quote'
import { CustomArrowDown } from '@/components/atoms'
import { Contact } from '@/components/contact'
import { getAllFrontMatters } from '@/lib/mdx'
import { DinoCount } from '@/components/dinoCount'

export default function IndexPage({ posts }) {
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
        <DinoCount />
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
      <PostList posts={posts} />
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

export const getStaticProps = async () => {
  const posts = await getAllFrontMatters()
  // const projects = await getProjects()

  return {
    props: { posts },
  }
}
