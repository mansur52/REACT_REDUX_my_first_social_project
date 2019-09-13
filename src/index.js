import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'Abraka dabraka:) I am your news', likesCount: 3},
    {id: 2, message: ' My news is Abraka dabraka:)', likesCount: 28}
]

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

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
