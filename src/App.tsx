import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

// type propsPostsType = {
//     state: {
//         profilePage: {
//             posts: Array<postType>,
//             newPostText: string
//         },
//         dialogsPage: {
//             dialogs: Array<dialogType>,
//             messeges: Array<messegeType>,
//             newMessegeText: string
//         }
//     },
//     dispatch: any
// }

function App() {

    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <Navbar/>
                <div className="main_content">
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile' render={() => <Profile />}/>
                    <Route path='/users'   render={() => <UsersContainer />}/>

                    <Route path='/news'     component={News}/>
                    <Route path='/music'    component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;