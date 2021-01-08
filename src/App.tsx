import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
// @ts-ignore
import {BrowserRouter, Route} from "react-router-dom";
import {dialogType, messegeType, postType} from './redux/state';


type propsPostsType = {
    state: {
        profilePage: {
            posts: Array<postType>
        },
        dialogsPage: {
            dialogs: Array<dialogType>,
            messeges: Array<messegeType>
        }
    }
}

function App(props: propsPostsType) {

    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <Navbar/>
                <div className="main_content">
                    <Route path='/dialogs'
                           render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path='/profile'
                           render={() => <Profile state={props.state.profilePage}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;