import React from "react";
import {injectIntl, intlShape, FormattedMessage, FormattedHTMLMessage} from "react-intl";
import { compose } from "recompose";

import LanguageSwitcher from "../components/LanguageSwitcher";
import withLayout from "../layout";
import withPageContext from "../pageContext";
import camLilly from "../images/cam-lilly.jpeg";

import Link from "../components/LocalizedLink";
import "../styles/saveTheDate.scss";

const SaveTheDate = ({ intl }) => (
    <React.Fragment>

        <div className='save-the-date__container'>
            <div className='save-the-date__header'>
                <LanguageSwitcher/>
            </div>

            <main className='save-the-date__main'>
                <img className="save-the-date__image" src={camLilly} alt="Us" />
                <div className='save-the-date__text-area'>
                    <h1>
                        <FormattedMessage id="savethedate.title" />
                    </h1>
                    <FormattedMessage id="savethedate.main" tagName="div" />
                    <FormattedMessage id="savethedate.date" tagName="div" />
                    <p>Gertrude's</p>
                    <p>10 Art Museum Dr.</p>
                    <p>Baltimore, MD</p>

                    {/*<Link to="/">*/}
                    {/*    <FormattedMessage id="back.home" />*/}
                    {/*</Link>*/}
                </div>
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
