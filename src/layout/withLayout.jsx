import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { getDisplayName } from "../utils";

import BackgroundSection from "./backgroundSection";
import "./layout.scss"

const withLayout = Component => {
    const WrapperComponent = props => {
        return (
            <React.Fragment>
                <BackgroundSection className='bg'/>
                <Header />
                <Component {...props} />
                <Footer />
            </React.Fragment>
        );
    };
    WrapperComponent.displayName = `Layout(${getDisplayName(Component)})`;
    return WrapperComponent;
};

export default withLayout;
