import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import MailView from './components/MailView/MailView';
import { useStore, StoreProvider } from './store';
import './App.scss';


function App() {
  return (
    <StoreProvider>
      <div className="gmail-app">
        <Header />
        <div className="content">
          <Nav />
          <MailView />
        </div>
      </div>
    </StoreProvider>
  );
}

export default App;
