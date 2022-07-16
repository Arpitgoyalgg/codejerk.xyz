import { Fragment } from 'react'
import { GetStaticProps } from 'next'
import { About24, GitHub24, MailAt24, Twitter24 } from '@/components/icons'
import { Contact } from '@/components/contact'
import { SEO } from '@/components/seo'
import { components as mdx } from '@/components/mdxComponents'
import { RichPresenceList } from '@/components/richPresenceList'

import { getCurrentlyPlaying, getRecentlyPlayed } from '@/lib/spotify'
import { getRecentMovies } from '@/lib/letterboxd'
import { getRecentGames } from '@/lib/steam'
import { getDoingNow } from '@/lib/notion'

import {
  LetterboxdRecentMovies,
  SpotifyCurrentTrack,
  SpotifyRecentTracks,
  SteamRecentlyPlayedGames,
} from '@/types/rich-presence'

interface AboutPageProps {
  spotify?: SpotifyCurrentTrack | SpotifyRecentTracks
  letterboxd?: LetterboxdRecentMovies
  steam: SteamRecentlyPlayedGames
  notion: any
}

// export default function About({
//   notion,
//   spotify,
//   letterboxd,
//   steam,
// }: AboutPageProps) {
export default function About() {
  return (
    <Fragment>
      <SEO title="About" />
      <div className="container">
        <span className="inline-flex p-3 rounded-full bg-back-subtle">
          <About24 />
        </span>
        <h1 className="mt-3 mb-2 text-2xl font-bold tracking-tight text-accent">
          Short Intro
        </h1>
        <article className="max-w-2xl min-w-0 text-base lg:text-lg text-fore-subtle">
          <mdx.p>
            I am a guy 🙂 . Started with web development as the primary domain
            and still stuck there. I also work with cloud sometimes as it is
            somewhat necessary to have an understanding of cloud to work with
            web efficienty. I love Netflix, deep space and music(pop,mostly).
          </mdx.p>
          <mdx.h3>Detailed Intro</mdx.h3>
          <mdx.p>
            My name is Arpit Goyal, a university student trying to score an
            Computer Science degree. I had Computer Science in high school but
            never got the hang of it until in later high school I discovered the
            CS50 course and the amazing professor{' '}
            <mdx.a href="https://cs.harvard.edu/malan/">David J. Malan</mdx.a>.
            Well, by discovered I mean on Internet, not in person 😂 (no way I
            can get into Harvard. Still wish I could visit there sometime). I
            don't have a course completion certificate because I never really
            officially enrolled in the course but did take it. Then I moved on
            to Web Development and have been doing it ever since (July 2019).
          </mdx.p>
          <mdx.p>
            My most recent work was with{' '}
            <mdx.a href="https://formidium.com/">Formidium</mdx.a> where I
            worked as a Graduate Engineering Trainee in the FrontEnd team. It
            was truely a great experience and I learned a lot.
            <br />I had to leave after 7 months as my univeristy went offline on
            full time basis after COVID-19.
          </mdx.p>
          <mdx.p>
            I also sucessfully completed an Intership as full-stack developer at{' '}
            <mdx.a href="https://www.verihired.com/">Verihired</mdx.a>. Although
            I was hired as a Python backend developer, they later got me into
            the frontend team too as I knew React and State Mangement.
            <br />
            The company never really launched officially due to conflicts
            between the founders.
          </mdx.p>
          <h1 className="mt-3 mb-2 text-2xl font-bold tracking-tight text-accent">
            Other Interests (outside of work)
          </h1>
          <mdx.p>
            I am a Deep Space fan first, Netflix fan second and Music fan third.
            These three are literally the only things I do when not working.
            Connect with me on{' '}
            <mdx.a href="https://twitter.com/arpitgoyalgg">Twitter</mdx.a> if
            you wanna talk about anything.
          </mdx.p>
          <mdx.h3>Why this Portfolio and Blog site?</mdx.h3>
          <mdx.p>
            Well I just wanted to do it for a long time and finally did. This is
            a site made using Next.js. I work with Next.js a lot so it was the
            only thing that came to my mind when the idea hit.
          </mdx.p>
          <mdx.h3>What else?</mdx.h3>
          <mdx.p>
            The games I currently play
            <ul className="my-5">
              <li className="ml-5">
                <mdx.a href="https://clashofclans.com/">Clash of clans</mdx.a>
              </li>
              <li className="ml-5">
                <mdx.a href="https://www.battlegroundsmobileindia.com/">
                  PUBG
                </mdx.a>
              </li>
            </ul>
            I am crazy about Clash of Clans. If you are too, join my{' '}
            <mdx.a href="https://link.clashofclans.com/en?action=OpenClanProfile&tag=QU2UJ28U">
              clan (Level 15)
            </mdx.a>
            . We can go crazy together!🤩
          </mdx.p>
          <mdx.h3>Inspiration of the Blog</mdx.h3>
          <mdx.p>
            The person I got the inspiration from is{' '}
            <mdx.a href="https://flaviocopes.com/">Flavio Copes</mdx.a>.
          </mdx.p>
          <mdx.h3>My Social links</mdx.h3>
          <mdx.p>
            <ul className="mb-5 flex">
              <li className="ml-3">
                <mdx.a href="https://www.linkedin.com/in/arpitgoyalgg/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-brand-linkedin"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {' '}
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />{' '}
                    <rect x="4" y="4" width="16" height="16" rx="2" />{' '}
                    <line x1="8" y1="11" x2="8" y2="16" />{' '}
                    <line x1="8" y1="8" x2="8" y2="8.01" />{' '}
                    <line x1="12" y1="16" x2="12" y2="11" />{' '}
                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />{' '}
                  </svg>
                </mdx.a>
              </li>
              <li className="ml-3">
                <mdx.a href="https://github.com/Arpitgoyalgg">
                  <GitHub24 />
                </mdx.a>
              </li>
              <li className="ml-3">
                <mdx.a href="https://twitter.com/arpitgoyalgg">
                  <Twitter24 />
                </mdx.a>
              </li>
              <li className="ml-3">
                <mdx.a href="mailto:arpitgoyalgg@gmail.com">
                  <MailAt24/>
                </mdx.a>
              </li>
            </ul>
            If my work has helped you in any way, consider buying me coffee(s).
            <ul className="my-5">
              <li className="ml-3 w-52">
                <mdx.a href="https://www.buymeacoffee.com/arpitgoyalgg">
                  <img src='/images/buymeacoffee.png'/>
                </mdx.a>
              </li>
            </ul>
          </mdx.p>
        </article>
        {/* <h3 className="mb-4 text-2xl font-bold leading-tight mt-14 text-accent">
          Recents
        </h3>
        <RichPresenceList presenceList={[notion, spotify, letterboxd, steam]} /> */}
      </div>
      <Contact />
    </Fragment>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   let spotify:
//     | SpotifyCurrentTrack
//     | SpotifyRecentTracks = await getCurrentlyPlaying()
//   if (spotify === null) {
//     spotify = await getRecentlyPlayed()
//   }

//   const letterboxd = await getRecentMovies()
//   const steam = await getRecentGames()
//   const notion = await getDoingNow()
//   return {
//     props: {
//       spotify,
//       letterboxd,
//       steam,
//       notion,
//     },
//     revalidate: 60,
//   }
// }
