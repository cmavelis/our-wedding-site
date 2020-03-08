import React from "react";
import Helmet from "react-helmet";
import { injectIntl, intlShape, FormattedMessage } from "react-intl";
import { compose } from "recompose";

import withLayout from "../layout";
import withPageContext from "../pageContext";
import RsvpForm from "../components/RSVPForm"

import Link from "../components/LocalizedLink";

const Rsvp = ({ intl }) => {
    const idBase = [
        'lodging1',
        'lodging2',
    ];
    const idFields = [
        'description',
        'price',
        'location',
        'who'
    ];

    return(
        <React.Fragment>
            <Helmet>
                <title>{intl.formatMessage({ id: "page1.title" })}</title>
            </Helmet>
            <main className="standard-page">
                <RsvpForm/>
            </main>
        </React.Fragment>
    );
};

Rsvp.propTypes = {
    intl: intlShape.isRequired
};

export default compose(
    withPageContext,
    withLayout,
    injectIntl
)(Rsvp);
