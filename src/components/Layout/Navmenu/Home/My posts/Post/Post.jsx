import React from 'react';
import s from './Post.module.css';

console.log(s);

const  Post = (props) => {
    return (
        <div className={s.news}>

            <h2> {props.message}</h2>

            <br/>
            <span><i className="fa fa-thumbs-o-up"></i>&#160;Like</span>{props.likesCount}
        </div>
    );
}

export default Post;