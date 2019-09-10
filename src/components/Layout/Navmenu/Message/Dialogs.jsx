import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

console.log(s);

const  Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.item}>
                    <NavLink to="/dialogs/1"> John</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs/1"> Mari</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs/1"> Sasha</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs/1"> Masha</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs/1"> Day</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs/1"> Bruno</NavLink>
                </div>

            </div>
            <hr/>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi!...
                </div>
                <div className={s.message}>
                    Hi how are you?...
                </div>
                <div className={s.message}>
                    Im Fine Tnk...
                </div>
                <div className={s.message}>
                    And you?...
                </div>
                <div className={s.message}>
                    Me too tnk!...
                </div>

            </div>
        </div>
    );
}

export default Dialogs;