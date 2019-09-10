import React from 'react';
import s from './Content.module.css';
import Comment from "../Home/Comments/Comment";

console.log(s);

const  Content = () => {
    return (
        <div className={s.content}>
            <img className={s.content__img} src="https://scontent-frt3-1.xx.fbcdn.net/v/t45.1600-4/cp0/q90/spS444/c1.0.1198.628a/s526x296/36857214_6112798216495_8099504590140997632_n.png.jpg?_nc_cat=102&_nc_oc=AQktwza58dWN_HwbAPkrD7fhzIm9mpcyUI1hjLhjzAmIY9_6chIHNUFOEf2OlzLAwk0&_nc_ht=scontent-frt3-1.xx&oh=8b1e5beaa94afd0ebc223c9f92c2df16&oe=5DF9CD11"/>
            <h2>TITLE HEADING</h2>
            <h5>Title description, Sep 2, 2017</h5>
            <p>Some text..</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

            <Comment message='Hello. How are you today?' age='&#160;I am 35'/>
            <Comment message='Hello. Im fine thank you!' age='&#160;I am 25'/>

            <form>
                <img className={s.comnt__img} src='https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-1/p100x100/68535478_166508524483923_6595518368634109952_n.jpg?_nc_cat=110&_nc_oc=AQnZFQXTpYV1-J2wmC_2BOMMx4oq3YAu7jBptAzj2EyEpUmROC7eFJbKlzGXKbwJU90&_nc_ht=scontent-frt3-1.xx&oh=6b0139ccba4340f15ad54817bbca216a&oe=5DF902D9'/>
                <input className={s.posts}type="text" name="search" placeholder="Your comments.."/>
            </form>
            <a href="#"><button className={s.publish}>Send</button></a>
        </div>
    );
}

export default Content;