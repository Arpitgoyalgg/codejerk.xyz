const siteMetadata = {
  title: `Arpit Goyal`,
  description: `Arpit Goyal is a web developer and an AWS certified cloud practitioner.`,
  author: `Arpit Goyal`,
  siteUrl:
    process.env.NODE_ENV === 'development'
      ? `https://dev.codejerk.xyz`
      : `https://codejerk.xyz`,
  image: `/static/og/default.png`,
  twitterUsername: `@arpitgoyalgg`,
}

export { siteMetadata }
