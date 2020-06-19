module.exports = {
  siteMetadata: {
    title: `Hello. I'm Martin Guzman | Cybersecurity Specialist with a side of beatbox.`,
    description: `Website of Martin Guzman, professional cybersecurity auditor specializing in penetration testing, python and bash scripting. Based in Orange County, California and Vancouver, Canada.`,
    titleTemplate: `%s | Martin Guzman`,
    url: `https://www.martin-guzman.com/`,
    image: `mainImg.png`,
    author: `Martin Guzman`,
    menuLinks: [
      {
        name: 'Home',
        slug: '/',
      },
      {
        name: 'About',
        slug: '/about/',
      },
      {  
        name: 'Articles',
        slug: '/articles/',
      },
      {  
        name: 'Contact',
        slug: '/contact/',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/articles/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            option: {
              maxWidth: 1200,
            },
          },
        ],
        defaultLayouts: {
          post: require.resolve('./src/components/layout.js'),
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Martin Guzman`,
        short_name: `Martin`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Raleway\:300,400,500,600,700,800,900`, //font-family: 'Raleway', sans-serif;
          `PT+Mono`, //font-family: 'PT Mono', monospace;
        ],
        display: 'swap',
      },
    },
    `gatsby-plugin-offline`,
  ],
}
