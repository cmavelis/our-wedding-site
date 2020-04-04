import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { getDisplayName } from "../utils";

import "./layout.scss"

const withLayout = Component => {
    const WrapperComponent = props => {
        return (
            <React.Fragment>
                <div id="page-container">
                    <Header />
                    <div id="content-wrap" >
                        <Component {...props} />
                    </div>
                    {/*<Footer />*/}
                </div>
            </React.Fragment>
        );
    };
    WrapperComponent.displayName = `Layout(${getDisplayName(Component)})`;
    return WrapperComponent;
};

export default withLayout;
