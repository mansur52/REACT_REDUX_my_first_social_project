import React from 'react';
import s from './Myposts.module.css';
import Post from "./Post/Post";

console.log(s);

const  Myposts = (props) => {


    let postsElements =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} />);


    return (
        <div>
            <img className={s.main__img} src="https://enigma-project.ru/wp-content/uploads/2015/05/ostrov-1.jpg" />
            <h2>My Posts</h2>
            <h5>Title description, Sep 6, 2019</h5>
            <form>
                <input className={s.posts}type="text" name="search" placeholder="Your News.."/>
            </form>
            <a href="#"><button className={s.publish}>Publish</button></a>


            { postsElements }
        </div>

    );
}

export default Myposts;