import React, { useState } from 'react';
import * as inboxIcon from '../../assets/inbox.png';
import * as starredIcon from '../../assets/starred.png';
import * as snoozedIcon from '../../assets/snoozed.png';
import * as sentIcon from '../../assets/sent.png';
import * as draftIcon from '../../assets/draft.png';

import './Nav.scss';

const menuElements = [{
    index: 1,
    icon: inboxIcon,
    name: 'Inbox',
    action: ''
}, {
    index: 2,
    icon: starredIcon,
    name: 'Starred',
    action: ''
}, {
    index: 3,
    icon: snoozedIcon,
    name: 'Snoozed',
    action: ''
}, {
    index: 4,
    icon: sentIcon,
    name: 'Sent',
    action: ''
}, {
    index: 5,
    icon: draftIcon,
    name: 'Drafts',
    action: ''
}];

const Nav = ({ handleMenu }) => {
    const [menuIndex, setMenuIndex] = useState(0);

    const handleClick = (action, index) => event => {
        setMenuIndex(index);
        //handleMenu(action);
    }

    return (
            <div className="action-section">
                <div className="button-round">
                    <i className="nav-compose-icon"/>
                    <span>Compose</span>
                </div>
                <ul>
                    {menuElements.map((e, i) =>
                        <li
                        key={`action-${i}`}
                        className={`menu-item ${menuIndex === e.index ? 'highlight' : ''}`}
                        onClick={handleClick(e.action, e.index)}>
                            <img alt={e.name} src={e.icon} />
                            <span>{e.name}</span>
                        </li>
                    )}
                </ul>
        </div>
    );
}

export default Nav;