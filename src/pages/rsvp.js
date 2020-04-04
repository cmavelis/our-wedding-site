import React from "react";
import Helmet from "react-helmet";
import { injectIntl, intlShape } from "react-intl";
import { compose } from "recompose";

import withLayout from "../layout";
import withPageContext from "../pageContext";
import RsvpForm from "../components/RSVPForm"


const Rsvp = ({ intl }) => {
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
