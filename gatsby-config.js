const config = require('./config');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: 'https://www.interokedigital.co.uk/'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    // Image optimization plugins - install with: npm install --save gatsby-plugin-sharp@^2.13.0 gatsby-transformer-sharp@^2.12.0
    // Note: These require proper Node.js and build environment. If installation fails, you may need to update Node.js version.
    // 'gatsby-plugin-sharp',
    // 'gatsby-transformer-sharp',

],
};
