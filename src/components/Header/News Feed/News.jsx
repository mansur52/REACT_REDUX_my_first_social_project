import React from 'react';
import s from './News.module.css';

console.log(s);

const  News = (props) => {
    return (
        <div className={s.nothing}>
            <h1>404 News Feed page not found! This page needs content...!<br/><br/> Let's get you back to <a href="/home"> Home.</a></h1>
        </div>
    );
}

export default News;