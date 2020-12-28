import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
// import {Route} from "react-route-dom";

function App() {
    return (
        <div className="app">
            <Header />
            <Navbar />
            <div className="main_content">
                {/*<Route component={Dialogs}></Route>*/}
                {/*<Route component={Profile}></Route>*/}
                <Dialogs/>
                <Profile />
            </div>
        </div>
    );
}

export default App;