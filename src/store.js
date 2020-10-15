import React, { createContext, useContext, useReducer } from 'react';
import emails from './emails';
import moment from 'moment';

export const StoreContext = createContext();
const initialState = {selected: [], emails: []};

const reducer = (state, action) => {
  switch(action.type) {
    case "select":
      return {
        ...state,
        selected: [...state.selected, action.selected],
      }
    case "load":
      return {
        ...state,
        emails: action.loaded
      }
      case "remove":
        const selected = [...state.selected];
        selected.splice(action.index, 1);
        return {
          ...state,
          selected: [...selected]
        }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const initializeEmail = () => {
    //api call
    const { messages } = emails;
    initialState.emails = prepareData(messages);
}

function prepareData(messages) {
  return messages.map(m => ({
    id: m.id,
    sender: m.sender,
    subject: m.subject,
    body: m.body,
    extract: m.body ? m.body.substr(0, 100) : '',
    date: m.date,
    friendlyDate: moment(m.date).format('MMM D'),
    tags: m.tags,
    tagCount: m.tags ? m.tags.length : 0
  }));
}

initializeEmail();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{state, dispatch}}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext);