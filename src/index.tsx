import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import {stateType} from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

let renderEntireTree = (state: stateType) => {
    debugger
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
                {/*<App state={state} dispatch={store.dispatch}/>*/}
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state);
});