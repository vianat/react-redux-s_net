import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {stateType} from './redux/state';

let renderEntireTree = (state: stateType) => {

    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);