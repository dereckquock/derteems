module.exports = {
  siteMetadata: {
    title: `teem quock`,
    description: `Dereck & Fatima's Wedding`,
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
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`),
      },
    },
    `gatsby-plugin-glamor`,
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
        spreadsheetId: '13Nu_A9ELa1au2Vy1IEf5yESRC-nHASoLzviAFhJtjUg',
        worksheetTitle: 'RSVP',
        credentials: require('./teemquock-5149948e9ab9'),
      },
    },
  ],
}
