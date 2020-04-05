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
            <div className="two-columns">
                <main className="standard-page">
                    <RsvpForm/>
                </main>
                <main className="announcement">
                    Please use this form to RSVP for yourself and your party. If you are not yet sure, please use the 'maybe' option and we will contact you closer to the date to get an updated response. If you need to update your response at any time between now and August, please just resubmit the form. We will use the email address to send periodic updates. Thanks!
                </main>
            </div>
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
