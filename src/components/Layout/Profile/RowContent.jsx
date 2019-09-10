import React from 'react';
import s from './RowContent.module.css';
import Navmenu from "../Navmenu/Navmenu";

import Myposts from "../Navmenu/Home/My posts/Myposts";
import Content from "../Navmenu/Posts/Content";
import Dialogs from "../Navmenu/Message/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "../../Header/News Feed/News";
import Settings from "../../Header/Settings/Settings";
import About from "../Navmenu/About/About";
import Photos from "../Navmenu/Photos/Photos";
import Reviews from "../Navmenu/Reviews/Reviews";
import Events from "../Navmenu/Events/Events";
import Community from "../Navmenu/Community/Community";
console.log(s);

const  RowContent = (props) => {
    return (
        <BrowserRouter>
        <div className={s.row}>
           <Navmenu />
           <div className={s.rowContainer}>
               <Route path='/home' component={Myposts}/>
               <Route path='/news feed' component={News}/>
               <Route path='/settings' component={Settings}/>

               <Route path='/dialogs' component={Dialogs}/>
               <Route path='/posts' component={Content}/>
               <Route path='/about' component={About}/>
               <Route path='/photos' component={Photos}/>
               <Route path='/reviews' component={Reviews}/>
               <Route path='/events' component={Events}/>
               <Route path='/community' component={Community}/>
           </div>
        </div>
        </BrowserRouter>
    );
}

export default RowContent;