import React from "react";
import { FormattedMessage } from "react-intl";

import Link from "../LocalizedLink";
import LanguageSwitcher from "../LanguageSwitcher";
import ClLogo from "../../images/svg/wedding.svg";

import "./Header.sass";

const Header = () => (
    <header className="Header">
        <ClLogo className="cl-logo" />
        <nav>
            <Link to="/">
                <FormattedMessage id="home.title" />
            </Link>
            <Link to="/lodging">
                <FormattedMessage id="page1.title" />
            </Link>
            <Link to="/rsvp">
                RSVP
            </Link>
            {/*<LanguageSwitcher />*/}
        </nav>
    </header>
);

export default Header;
