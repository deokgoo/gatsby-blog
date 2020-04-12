module.exports = {
  siteMetadata: {
    title: `d9 techBlog`,
    description: `Web blog`,
    repo: 'deokgoo/gatsby-blog',
    author: `deokgoo`,
    profile: {
      profile_img: 'https://avatars3.githubusercontent.com/u/20182365?s=400&u=b42f8d09da0bbba0a1aa030e2f2a184ecad8510f&v=4',
      profile_name: 'deokgoo',
      profile_description: '발전하는 웹 프론트 개발자입니다.'
    }
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-remark`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
