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
            <Timeline/>
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
