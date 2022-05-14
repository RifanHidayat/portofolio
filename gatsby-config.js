module.exports = {
  siteMetadata: {
    title: ``,
    description: `Arenzha Media Teknologi merupakan perusahaan yang bergerak di bidang teknologi informasi. Kami sebagai software developer dengan fitur aplikasi berupa ERP menyediakan jasa aplikasi berbasis web, mobile, maupn hybrid sesuai dengan alur dan kebutuhan perusahaan klien kami yang beragam`,
    author: `@arenzhamediateknologi`,
    siteUrl: `https://arenzha.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        background_color: `#2196F3`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/arenzha-logo-icon.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}