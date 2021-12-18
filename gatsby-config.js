module.exports = {
  // pathPrefix: "/reggielussier",
  siteMetadata: {
    title: `Reggie Lussier`,
    description: `Actor Website`,
    author: `Reggie Lussier`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `green`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/RL.png`, 
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],

}