import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {stateType} from './redux/state';

let renderEntireTree = (state: stateType) => {

    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addMessege={store.addMessege.bind(store)}
                 updateMessegeText={store.updateMessegeText.bind(store)}
                 removeLastMessege={store.removeLastMessege.bind(store)}
                 addPost={store.addPost.bind(store)}
                 updatePostText={store.updatePostText.bind(store)}
                 removeLastPost={store.removeLastPost.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);