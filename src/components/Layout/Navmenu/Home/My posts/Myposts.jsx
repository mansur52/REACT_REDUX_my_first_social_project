import React from 'react';
import s from './Myposts.module.css';
import Post from "./Post/Post";

console.log(s);

const  Myposts = () => {

    let postData = [
        {id: 1, message: 'Abraka dabraka:) I am your news', likesCount: 3},
        {id: 2, message: ' My news is Abraka dabraka:)', likesCount: 28}
    ]



    return (
        <div>
            <img className={s.main__img} src="https://enigma-project.ru/wp-content/uploads/2015/05/ostrov-1.jpg" />
            <h2>My Posts</h2>
            <h5>Title description, Sep 6, 2019</h5>
            <form>
                <input className={s.posts}type="text" name="search" placeholder="Your News.."/>
            </form>
            <a href="#"><button className={s.publish}>Publish</button></a>


            <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
            <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
        </div>

    );
}

export default Myposts;