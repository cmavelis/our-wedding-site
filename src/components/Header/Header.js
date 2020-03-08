import React from "react";
import { FormattedMessage } from "react-intl";

import Link from "../LocalizedLink";
import LanguageSwitcher from "../LanguageSwitcher";

import "./Header.sass";

const Header = () => (
    <header className="Header">
        <img
            className="Logo"
            alt="Gatsby"
            src="https://www.gatsbyjs.org/monogram.svg"
            width="60"
        />
        <nav>
            <Link to="/">
                <FormattedMessage id="home.title" />
            </Link>
            <Link to="/lodging">
                <FormattedMessage id="page1.title" />
            </Link>
            <Link to="/subpage/page1">
                <FormattedMessage id="subpage.page1.title" />
            </Link>
            <Link to="/rsvp">
                RSVP
            </Link>
            {/*<LanguageSwitcher />*/}
        </nav>
    </header>
);

export default Header;
