import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import RowContent from './components/Layout/Profile/RowContent.jsx';
import {BrowserRouter} from "react-router-dom";

const App = (props) => {


  return (
      <BrowserRouter>
    <div className='app-wrapper'>
        <Header />
        <RowContent posts={props.posts}/>
    </div>
      </BrowserRouter>
  );
}

export default App;