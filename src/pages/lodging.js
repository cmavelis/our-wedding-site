import React from "react";
import Helmet from "react-helmet";
import { injectIntl, intlShape, FormattedMessage } from "react-intl";
import { compose } from "recompose";

import withLayout from "../layout";
import withPageContext from "../pageContext";
import MapComponent from "../maps/MapComponent";

const Lodging = ({ intl }) => {
    const lodgingSources = [
        {
            name: 'Hotel Revival',
            idBase: 'lodging1',
            url: 'https://www.hyatt.com/en-US/group-booking/BWIJD/G-OEEY',
        },
        {
            name: 'Days Inn',
            idBase: 'lodging2',
            url: 'https://www.wyndhamhotels.com/days-inn/baltimore-maryland/days-inn-baltimore-inner-harbor-hotel/' +
                'rooms-rates?&checkInDate=09/25/2020&checkOutDate=09/27/2020&groupCode=CG25NG'
        },
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
            <div className="two-columns">
                <main className="standard-page ">
                    <h1>
                        <FormattedMessage id="page1.title" />
                    </h1>
                    {lodgingSources.map(
                        lodgingSource => {
                            const baseString = lodgingSource.idBase;
                            return (
                                <section key={baseString + '-key'}>
                                    <h3>
                                    <FormattedMessage id={baseString + '.header'} />
                                    </h3>
                                    <ul className="no-decoration">
                                    {idFields.map(
                                        fieldString => (
                                            <li key={baseString + '-' + fieldString + '-key'}>
                                                <strong>{fieldString.charAt(0).toUpperCase() + fieldString.substring(1) + ': '}</strong>
                                                <FormattedMessage id={baseString + '.' + fieldString}/>
                                            </li>
                                        )
                                    )}
                                        <li>
                                            <a target='_blank' href={lodgingSource.url}>Book Here</a>
                                        </li>
                                    </ul>
                                </section>
                            )
                        }
                    )}
            </main>
                <div className="flex-grow map-container"><MapComponent/></div>
            </div>
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
