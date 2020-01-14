import React from "react";
import {injectIntl, intlShape, FormattedMessage, FormattedHTMLMessage} from "react-intl";
import { compose } from "recompose";

import LanguageSwitcher from "../components/LanguageSwitcher";
import withLayout from "../layout";
import withPageContext from "../pageContext";
import camLilly from "../images/cam-lilly.jpeg";
import BackgroundSection from "../layout/backgroundSection";

import Link from "../components/LocalizedLink";
import "../styles/saveTheDate.scss";

// add easter egg for saying lilly painted the BG

const SaveTheDate = ({ intl }) => (
    <React.Fragment>
        <BackgroundSection/>

    </React.Fragment>
);

SaveTheDate.propTypes = {
    intl: intlShape.isRequired
};

export default compose(
    withPageContext,
    injectIntl
)(SaveTheDate);
