import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addMessege, addPost } from './redux/state';

export let renderAllApp = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} addMessege={addMessege}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderAllApp();