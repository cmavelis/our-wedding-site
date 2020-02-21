import React, { useState } from "react";
import { graphql } from "gatsby"
import {injectIntl, intlShape, FormattedMessage} from "react-intl";
import { compose } from "recompose";
import Img from "gatsby-image"

import withPageContext from "../pageContext";
import withLayout from "../layout";
import BackgroundSection from "../layout/backgroundSection";
import Timeline from "../components/Timeline";
import useApiRequest from "../common/useApiRequest";


// import "../styles/saveTheDate.scss";
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
