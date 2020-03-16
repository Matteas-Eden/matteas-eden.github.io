import React from 'react';

import { SignatureBasic } from './SignatureBasic';
import { SignatureCalligraphy } from './SignatureCalligraphy';
import { NavMenu } from './NavMenu';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Menu = () => {
    return (
        <div className="menu">
            <NavMenu
                items={['About', 'Projects', 'My CV', 'Contact']}
                logo={SignatureCalligraphy}
                langSwitcher={LanguageSwitcher}
            />
        </div>
    );
};
