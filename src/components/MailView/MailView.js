import React from 'react';
import MailRow from './components/MailRow';
import { useStore } from '../../store';

import './MailView.scss';

const MailView = (props) => {
    const {state, _dispatch} = useStore();
    const { emails } = state;
    return (
        <section className="mail-viewer">
            <div className="mail-header">
                <div className="header sender">Sender</div>
                <div className="header subject">Subject</div>
                <div className="header body">Body</div>
            </div>
            {emails.map((email, index) =>
                <MailRow
                    key={`mail-row-${index}`}
                    id={email.id}
                    sender={email.sender}
                    subject={email.subject}
                    extract={email.extract}
                    date={email.friendlyDate}
                    tags={email.tagCount}
                />
            )}
        </section>
    );
}


export default MailView;