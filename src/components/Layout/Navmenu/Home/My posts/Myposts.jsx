import React from 'react';
import s from './Myposts.module.css';
import Post from "./Post/Post";

console.log(s);

const  Myposts = () => {
    return (
        <div>
            <img className={s.main__img} src="https://enigma-project.ru/wp-content/uploads/2015/05/ostrov-1.jpg" />
            <h2>My Posts</h2>
            <h5>Title description, Sep 6, 2019</h5>
            <form>
                <input className={s.posts}type="text" name="search" placeholder="Your News.."/>
            </form>
            <a href="#"><button className={s.publish}>Publish</button></a>


            <Post message='Abraka dabraka:) I am your news' likesCount='&#160;3'/>
            <Post message=' My news is Abraka dabraka:)' likesCount='&#160;28'/>

        </div>

    );
}

export default Myposts;