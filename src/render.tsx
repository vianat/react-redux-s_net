import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addMessege, addPost, dialogType, messegeType, postType} from "./redux/state";
import reportWebVitals from "./reportWebVitals";

type propsStateType = {
    state: {
        profilePage: {
            posts: Array<postType>
        },
        dialogsPage: {
            dialogs: Array<dialogType>,
            messeges: Array<messegeType>
        }
    },
    addMessege: any,
    addPost: any
}

export let renderEntiredTree = (props: propsStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={props.state} addMessege={addMessege} addPost={addPost}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

reportWebVitals();