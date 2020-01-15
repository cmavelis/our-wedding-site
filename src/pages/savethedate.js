import React from "react";
import {injectIntl, intlShape, FormattedMessage, FormattedHTMLMessage} from "react-intl";
import { compose } from "recompose";

import LanguageSwitcher from "../components/LanguageSwitcher";
import withLayout from "../layout";
import withPageContext from "../pageContext";
import camLilly from "../images/cam-lilly.jpeg";

import Link from "../components/LocalizedLink";
import "../styles/saveTheDate.scss";

// add easter egg for saying lilly painted the BG

const SaveTheDate = ({ intl }) => (
    <React.Fragment>

        <div className='save-the-date__container'>
            {/*<div className='save-the-date__header'>*/}
            {/*    <LanguageSwitcher/>*/}
            {/*</div>*/}

            <main className='save-the-date__main'>
                <span className='save-the-date__floating-text'>Save the Date!</span>
                <section className='save-the-date__image-and-text'>
                    <img className="save-the-date__image" src={camLilly} alt="Us" />
                    <div className='save-the-date__text-area'>
                    <h1>
                        <p>Lillian Nguyen</p>
                        <p>&</p>
                        <p>Cameron Avelis</p>
                        {/*<FormattedMessage id="savethedate.title" />*/}
                    </h1>
                    <p> are getting married!</p>
                    <br />
                    <div className='save-the-date__text-area--information'>
                        <FormattedMessage id="savethedate.date" tagName="div" />
                        <p>Gertrude's</p>
                        <p>10 Art Museum Dr.</p>
                        <p>Baltimore, MD</p>
                    </div>
                    <br />
                    <p>Website to follow with more details</p>


                    {/*<Link to="/">*/}
                    {/*    <FormattedMessage id="back.home" />*/}
                    {/*</Link>*/}
                </div>
                </section>
            </main>
            <div className='save-the-date__footer'>
            </div>
        </div>
    </React.Fragment>
);

SaveTheDate.propTypes = {
    intl: intlShape.isRequired
};

export default compose(
    withPageContext,
    injectIntl
)(SaveTheDate);
