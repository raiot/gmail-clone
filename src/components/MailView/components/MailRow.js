import React from 'react';
import { useStore } from '../../../store';


const MailRow = ({ id, subject, sender, extract, tags, date }) => {
    const { state, dispatch } = useStore();

    const handleSelect = id => () => {
        const index = state.selected.indexOf(id);
        if(index === -1) {
            dispatch({ type: 'select',  selected: id });
        } else {
            dispatch({ type: 'remove',  index: index });
        }
    }
    const isSelected = state.selected.includes(id);

    return (
        <div onClick={handleSelect(id)} className={`mail-row ${isSelected ? 'row-highlight' : ''}`}>
            <div>
                <input type="checkbox" checked={isSelected} />
            </div>
            <div className="sender col">
                <span>{ sender }</span>
            </div>
            <div className="subject col">
                <span>{ subject }</span>
            </div>
            <div className="substract col">
                <span dangerouslySetInnerHTML={{__html: extract}} />
            </div>
            <div className="date col">
                <span>{date}</span>
            </div>
            <div className="tags col">
                <span>{tags} tag(s)</span>
            </div>
        </div>
    );
}


export default MailRow;