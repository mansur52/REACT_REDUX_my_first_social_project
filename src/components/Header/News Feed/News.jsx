import React from 'react';
import s from './News.module.css';

console.log(s);

const  News = (props) => {
    return (
        <div className={s.nothing}>
            <h1>404 The page you were looking for was moved or needs style!<br/> Let's get you back to... <a href="/home"> Home</a></h1>
        </div>
    );
}

export default News;