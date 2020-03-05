import React from "react";
import Helmet from "react-helmet";
import { injectIntl, intlShape, FormattedMessage } from "react-intl";
import { compose } from "recompose";

import withLayout from "../layout";
import withPageContext from "../pageContext";

import Link from "../components/LocalizedLink";

const Lodging = ({ intl }) => {
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
    const numberHotels = 2;

    return(
        <React.Fragment>
            <Helmet>
                <title>{intl.formatMessage({ id: "page1.title" })}</title>
            </Helmet>
            <main className="standard-page">
                <h1>
                    <FormattedMessage id="page1.title" />
                </h1>
                {idBase.map(
                    baseString => (
                        <section>
                            <h3><FormattedMessage id={baseString + '.header'} /></h3>
                            {idFields.map(
                                fieldString => (
                                    <p><FormattedMessage id={baseString + '.' + fieldString} /></p>
                                )
                            )}
                        </section>
                    )
                )}

                {/*<Link to="/">*/}
                {/*    <FormattedMessage id="back.home" />*/}
                {/*</Link>*/}
            </main>
        </React.Fragment>
    );
};

Lodging.propTypes = {
    intl: intlShape.isRequired
};

export default compose(
    withPageContext,
    withLayout,
    injectIntl
)(Lodging);
