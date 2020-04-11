import React, { useState } from "react";
import {injectIntl, intlShape, FormattedMessage} from "react-intl";
import { compose } from "recompose";

import withPageContext from "../pageContext";
import withLayout from "../layout";
import Timeline from "../components/Timeline";
import useApiRequest from "../common/useApiRequest";

import "../styles/addressForm.scss";
import "../styles/background.scss";

const Index = ({ data }) => {
    const [slideUp, setSlideUp] = useState(false);
    const [wakeUpState, wakeUpRequest] = useApiRequest('https://cma-wedding-api.herokuapp.com/', {verb: 'get'});

    const handleClick = () => {
        wakeUpRequest();
        setSlideUp(!slideUp);
    };

    return(
        <React.Fragment>
            <div className="two-columns">
                <main className="announcement ">
                    <h3>April 11th Update</h3>
                    <p>
                        We're excited to celebrate with you on September 26, 2020. We are hopeful that the coronavirus pandemic will have settled down by September.  We'll be keeping an eye on the news and will update this website and send emails if we have to make any changes to our planned activities.
                    </p>
                    <p>
                        We'd encourage RSVPs right now -- there is a 'maybe' option so you do not have to feel locked in if you're monitoring the coronavirus situation, or are just not sure yet for other reasons.
                    </p>
                </main>
                <Timeline/>
            </div>
        </React.Fragment>
    );
};

Index.propTypes = {
    intl: intlShape.isRequired
};

export default compose(
    withPageContext,
    withLayout,
    injectIntl
)(Index);
