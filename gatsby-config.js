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
    `gatsby-plugin-netlify`,
    {
      resolve: 'gatsby-plugin-guess-js',
      options: {
        // Find the view id in the GA admin in a section labeled "views"
        GAViewID: `193043111`,
        minimumThreshold: 0.03,
        // The "period" for fetching analytic data.
        period: {
          startDate: new Date('2019-4-6'),
          endDate: new Date(),
        },
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
        spreadsheetId: '13Nu_A9ELa1au2Vy1IEf5yESRC-nHASoLzviAFhJtjUg',
        worksheetTitle: 'RSVP',
        credentials:
          process.env.DEV_BUILD === 'true'
            ? require('./teemquock')
            : JSON.parse(process.env.GOOGLE_SHEETS),
      },
    },
  ],
}
