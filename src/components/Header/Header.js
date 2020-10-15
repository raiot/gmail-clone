import React from 'react';
import { useStore } from '../../store';
import * as logo from '../../assets/logo_gmail_lockup_default_1x.png'

import './Header.scss';

const Header = (props) => {
    const { state } = useStore();
    return (
        <nav>
            <div className="tools-section">
                <div className="hamburger-icon">M</div>
                <img alt="logo" src={logo} />
                <div>{state.selected.length} email(s) selected</div>
            </div>
        </nav>
    )
};

export default Header;