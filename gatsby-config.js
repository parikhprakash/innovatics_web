module.exports = {
  siteMetadata: {
    title: `Team Innovatics`,
    author: {
      name: `Prakash Parikh`,
      summary: `who lives and works in San Francisco building useful things.`,
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.app/`,
    social: {
      twitter: `parikhprakash`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#663399`,
        display: `minimal-ui`
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: '/js/vendor/modernizr.min.js', // Change to the script filename
      },
    }
    ,
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: '/js/vendor/jquery.js', // Change to the script filename
      },
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: '/js/vendor/bootstrap.min.js', // Change to the script filename
      },
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: '/js/waypoints.min.js', // Change to the script filename
      },
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: '/js/wow.js', // Change to the script filename
      },
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: '/js/counterup.js', // Change to the script filename
      },
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: '/js/imagesloaded.js', // Change to the script filename
      },
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: '/js/isotope.js', // Change to the script filename
      },
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: '/js/tilt.js', // Change to the script filename
      },
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: '/js/anime.js', // Change to the script filename
      },
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: '/js/tweenmax.js', // Change to the script filename
      },
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: '/js/slipting.js', // Change to the script filename
      },
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: '/js/scrollmagic.js', // Change to the script filename
      },
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: '/js/addindicators.js', // Change to the script filename
      },
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: '/js/slick.js', // Change to the script filename
      },
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: '/js/youtube.js', // Change to the script filename
      },
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: '/js/countdown.js', // Change to the script filename
      },
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: '/js/scrollup.js', // Change to the script filename
      },
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: '/js/stickysidebar.js', // Change to the script filename
      },
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: '/js/contactform.js', // Change to the script filename
      },
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: '/js/main.js', // Change to the script filename
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
