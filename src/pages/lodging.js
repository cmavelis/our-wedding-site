import React from "react";
import Helmet from "react-helmet";
import { injectIntl, intlShape, FormattedMessage } from "react-intl";
import { compose } from "recompose";

import withLayout from "../layout";
import withPageContext from "../pageContext";

import Link from "../components/LocalizedLink";

const Lodging = ({ intl }) => (
    <React.Fragment>
        <Helmet>
            <title>{intl.formatMessage({ id: "page1.title" })}</title>
        </Helmet>
        <main>
            <h1>
                <FormattedMessage id="page1.title" />
            </h1>
            <section>
                <h3>
                    <FormattedMessage id="lodging.header1" />
                </h3>
                <p>
                    <FormattedMessage id="lodging.body1" />
                </p>
            </section>
            <section>
                <h3>
                    <FormattedMessage id="lodging.header2" />
                </h3>
                <p>
                    <FormattedMessage id="lodging.body2" />
                </p>
            </section>
            {/*<Link to="/">*/}
            {/*    <FormattedMessage id="back.home" />*/}
            {/*</Link>*/}
        </main>
    </React.Fragment>
);

Lodging.propTypes = {
    intl: intlShape.isRequired
};

export default compose(
    withPageContext,
    withLayout,
    injectIntl
)(Lodging);
