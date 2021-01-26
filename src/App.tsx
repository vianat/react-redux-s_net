import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";
import {dialogType, messegeType, postType} from './redux/store';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Profile from "./components/Profile/Profile";

type propsPostsType = {
    state: {
        profilePage: {
            posts: Array<postType>,
            newPostText: string
        },
        dialogsPage: {
            dialogs: Array<dialogType>,
            messeges: Array<messegeType>,
            newMessegeText: string
        }
    },
    dispatch: any
}

function App(props: propsPostsType) {

    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <Navbar/>
                <div className="main_content">
                    <Route path='/dialogs'
                           render={() => <DialogsContainer
                               store={props.state.dialogsPage}
                               dispatch={props.dispatch}/>}/>
                    <Route path='/profile'
                           render={() => <Profile
                               store={props.state.profilePage}
                               dispatch={props.dispatch}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;