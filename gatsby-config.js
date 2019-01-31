module.exports = {
  siteMetadata: {
    title: `teem quock`,
    description: `Our wedding`,
    author: `@dereckquock`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `teem quock`,
        short_name: `teem quock`,
        start_url: `/`,
        background_color: `#DDD3C9`,
        theme_color: `#DDD3C9`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        legacy: true,
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`),
      },
    },
    `gatsby-plugin-glamor`,
  ],
}
