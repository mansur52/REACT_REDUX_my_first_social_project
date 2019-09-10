import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import RowContent from './components/Layout/Profile/RowContent.jsx';

const App = () => {
  return (
    <div className='app-wrapper'>
        <Header />
        <RowContent />
    </div>
  );
}

export default App;
