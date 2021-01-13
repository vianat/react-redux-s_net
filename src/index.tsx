import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addMessege, updateMessegeText, removeLastMessege, addPost, removeLastPost, updatePostText } from './redux/state';

export let RenderAllApp = () => {

    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addMessege={addMessege}
                 updateMessegeText={updateMessegeText}
                 removeLastMessege={removeLastMessege}
                 addPost={addPost}
                 updatePostText={updatePostText}
                 removeLastPost={removeLastPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

RenderAllApp();