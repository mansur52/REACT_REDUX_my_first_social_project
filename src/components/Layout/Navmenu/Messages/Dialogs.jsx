import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./Dialogitem/Dialogitem";


const  Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'John'},
        {id: 2, name: 'Mari'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Masha'},
        {id: 5, name: 'Day'},
        {id: 6, name: 'Bruno'}
    ]

  let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi how are you?...'},
        {id: 3, message: 'Im Fine Tnk...'},
        {id: 4, message: 'And you?...'},
        {id: 5, message: 'Me too tnk!..'}
]

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/> );
    let messagesElements = messages.map( m => <Message message={m.message} id={m.id} /> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <hr/>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    );
}

export default Dialogs;