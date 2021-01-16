import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {
    addMessege,
    updateMessegeText,
    removeLastMessege,
    addPost,
    removeLastPost,
    updatePostText,
    subscribe, stateType
} from './redux/state';

let renderEntireTree = (state: stateType) => {

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

renderEntireTree(state);

subscribe(renderEntireTree);