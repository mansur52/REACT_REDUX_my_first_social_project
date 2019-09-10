import React from 'react';
import s from './Comment.module.css';

console.log(s);

const  Comment = (props) => {
    return (
        <div className={s.container}>
            <img className={s.container__img} src='https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-1/p100x100/68535478_166508524483923_6595518368634109952_n.jpg?_nc_cat=110&_nc_oc=AQnZFQXTpYV1-J2wmC_2BOMMx4oq3YAu7jBptAzj2EyEpUmROC7eFJbKlzGXKbwJU90&_nc_ht=scontent-frt3-1.xx&oh=6b0139ccba4340f15ad54817bbca216a&oe=5DF902D9'/>
            <p>{props.message},{props.age}</p>
            <span className={s.time__right}>11:00</span>
        </div>
    );
}

export default Comment;