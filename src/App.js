import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import RowContent from './components/Layout/Profile/RowContent.jsx';
import {BrowserRouter} from "react-router-dom";
import state, {addPost} from "./redux/state";

const App = (props) => {


  return (
      <BrowserRouter>
    <div className='app-wrapper'>
        <Header />
        <RowContent posts={props.state.posts} dialogs={props.state.dialogs}
        messages={props.state.messages} addPost={props.state.addPost}/>
    </div>
      </BrowserRouter>
  );
};

export default App;
