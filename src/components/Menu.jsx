import React from 'react';

import { NavMenu } from './NavMenu';

export const Menu = () => {
    return (
        <div className="menu">
            <NavMenu items={['About', 'Projects', 'My CV', 'Contact']} />
        </div>
    );
};
