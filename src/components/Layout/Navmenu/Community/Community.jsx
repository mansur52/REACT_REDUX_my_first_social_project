import React from 'react';
import s from './Community.module.css';

console.log(s);

const  Community = (props) => {
    return (
        <div className={s.nothing}>
            <h1>404 Community page not found! This page needs content...!<br/><br/> Let's get you back to <a href="/home"> Home.</a></h1>
        </div>
    );
}

export default Community;