import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className, children }) => {
    const data = useStaticQuery(graphql`
    query {
        desktop: file(relativePath: { eq: "background.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
  `);
    const imageData = data.desktop.childImageSharp.fluid;
    return (
        <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
            backgroundColor={`#040e18`}
        >
            {children}
        </BackgroundImage>
    )
};

export default BackgroundSection
