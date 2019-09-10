import React from 'react';
import s from './Events.module.css';

console.log(s);

const  Events = (props) => {
    return (
        <div className={s.nothing}>
            <h1>404 Events page not found! This page needs content...!<br/><br/> Let's get you back to <a href="/home"> Home.</a></h1>
        </div>
    );
}

export default Events;