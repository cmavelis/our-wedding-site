const path = require(`path`);

module.exports = {
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-layout`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.join(__dirname, `src`, `images`),
            },
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: path.join(__dirname, `src`, `images`, 'svg'),
                }
            }
        },
    ]
};
