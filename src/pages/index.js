import React, { useState } from "react";
import { graphql } from "gatsby"
import {injectIntl, intlShape, FormattedMessage} from "react-intl";
import { compose } from "recompose";
import Img from "gatsby-image"

import withPageContext from "../pageContext";
import BackgroundSection from "../layout/backgroundSection";

import "../styles/saveTheDate.scss";

// add easter egg for saying lilly painted the BG

export const query = graphql`
  query {
    file(relativePath: { eq: "cam-lilly.jpeg" }) {
      childImageSharp {
        fixed(quality: 100, width: 375, height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Index = ({ data }) => {
    const [slideUp, setSlideUp] = useState(false);

    const handleClick = () => {
        setSlideUp(!slideUp);
    };

    return(
        <React.Fragment>
            <BackgroundSection className='save-the-date__background'>

                <div className='save-the-date__container'>
                    <header className='save-the-date__header'/>
                    <main className='save-the-date__main'>
                        <span className='save-the-date__floating-text'>Save the Date</span>
                        <section className='save-the-date__image-and-text'>
                            <Img fixed={data.file.childImageSharp.fixed} />

                            <div className='save-the-date__text-area-wrapper'>
                                <div className={'save-the-date__text-area' + (slideUp ? ' slide-up' : '')}>
                                    <h1>
                                        <p>Lillian Nguyen</p>
                                        <p>&</p>
                                        <p>Cameron Avelis</p>
                                    </h1>
                                    <p>are getting married!</p>
                                    <br />
                                    <div className='save-the-date__text-area--information'>
                                        <FormattedMessage id="savethedate.date" tagName="div" />
                                        <p>Gertrude's</p>
                                        <p>10 Art Museum Dr.</p>
                                        <p>Baltimore, MD</p>
                                    </div>
                                    <br />
                                    <p>full website to follow with more details</p>
                                    <button onClick={handleClick}> click </button>
                                    <br />
                                    <br />
                                    <br />
                                    <p>I'm hidden below</p>
                                </div>
                            </div>
                        </section>
                    </main>
                    {/*<footer className='save-the-date__footer'/>*/}

                    {/*<footer className='save-the-date__footer'>*/}
                    {/*    /!*<span>Background Image: Lillian Nguyen</span>*!/*/}
                    {/*</footer>*/}
                </div>
            </BackgroundSection>
        </React.Fragment>
    );
};

Index.propTypes = {
    intl: intlShape.isRequired
};

export default compose(
    withPageContext,
    injectIntl
)(Index);
