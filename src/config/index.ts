const siteMetadata = {
  title: `Arpit Goyal`,
  description: `Arpit Goyal is a web developer and a AWS certified cloud practitioner.`,
  author: `Arpit Goyal`,
  siteUrl:
    process.env.NODE_ENV === 'development'
      ? `https://dev.jeffjadulco.com`
      : `https://jeffjadulco.com`,
  image: `/static/og/default.png`,
  twitterUsername: `@arpitgoyalgg`,
}

export { siteMetadata }
