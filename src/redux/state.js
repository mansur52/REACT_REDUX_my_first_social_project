import {rerenderEntireTree} from "../render";


let state = {
    posts: [
        {id: 1, message: 'Abraka dabraka:) I am your news', likesCount: 3},
        {id: 2, message: ' My news is Abraka dabraka:)', likesCount: 28}
    ],
    dialogs: [
        {id: 1, name: 'John'},
        {id: 2, name: 'Mari'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Masha'},
        {id: 5, name: 'Day'},
        {id: 6, name: 'Bruno'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi how are you?...'},
        {id: 3, message: 'Im Fine Tnk...'},
        {id: 4, message: 'And you?...'},
        {id: 5, message: 'Me too tnk!..'}
    ]

};

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.posts.push(newPost);
    rerenderEntireTree(state);
};

export default state;