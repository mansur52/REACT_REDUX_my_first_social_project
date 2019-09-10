import React from 'react';
import s from './About.module.css';

console.log(s);

const  About = (props) => {
    return (
        <div className={s.nothing}>
            <h1>404 About page not found! This page needs content...!<br/><br/> Let's get you back to <a href="/home"> Home.</a></h1>
        </div>
    );
}

export default About;