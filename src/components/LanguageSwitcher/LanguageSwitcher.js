import React from "react";
import { Link } from "gatsby";

import cs from "../../images/cs.png";
import en from "../../images/en.png";
import vi from "../../images/vi.png";

import { languages, getLocalizedPath } from "../../i18n";

import { PageContext } from "../../pageContext";

import "./LanguageSwitcher.sass";

const flags = {
    cs,
    en,
    vi
};

const LanguageSwitcher = () => (
    <PageContext.Consumer>
        {({ originalPath, locale }) => (
            <div className="LanguageSwitcher">
                {languages.map(lang =>
                    lang.locale === locale ? (
                        <img
                            key={lang.locale}
                            src={flags[lang.locale]}
                            alt={lang.label}
                        />
                    ) : (
                        <Link
                            key={lang.locale}
                            to={getLocalizedPath(originalPath, lang.locale)}
                        >
                            <img src={flags[lang.locale]} alt={lang.label} />
                        </Link>
                    )
                )}
            </div>
        )}
    </PageContext.Consumer>
);

export default LanguageSwitcher;
