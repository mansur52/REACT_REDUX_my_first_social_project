import React from 'react';
import s from './RowContent.module.css';
import Navmenu from "../Navmenu/Navmenu";

import MyPosts from "../Navmenu/Home/My posts/MyPosts";
import Content from "../Navmenu/Posts/Content";
import Dialogs from "../Navmenu/Messages/Dialogs";

import News from "../../Header/News Feed/News";
import Settings from "../../Header/Settings/Settings";
import About from "../Navmenu/About/About";
import Photos from "../Navmenu/Photos/Photos";
import Reviews from "../Navmenu/Reviews/Reviews";
import Events from "../Navmenu/Events/Events";
import Community from "../Navmenu/Community/Community";
import { Route } from "react-router-dom";

console.log(s);

const RowContent = (props) => {

    return (

            <div className={s.row}>
                <Navmenu/>
                <div className={s.rowContainer}>
                    <Route path='/home' render={() => <MyPosts posts={props.posts} addPost={props.addPost} />}/>
                    <Route path='/news feed' render={() => <News/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>

                    <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path='/posts' render={() => <Content/>}/>
                    <Route path='/about' render={() => <About/>}/>
                    <Route path='/photos' render={() => <Photos/>}/>
                    <Route path='/reviews' render={() => <Reviews/>}/>
                    <Route path='/events' render={() => <Events/>}/>
                    <Route path='/community' render={() => <Community/>}/>
                </div>
            </div>

    );
}

export default RowContent;