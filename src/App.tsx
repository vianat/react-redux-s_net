import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from "./components/Login/LoginPage";
import {connect} from "react-redux";
import store from "./redux/redux-store";
import {authenticationMe, authStateType} from "./redux/auth-reducer";
import {profileType} from "./redux/profile-reducer";
import {dialogType} from "./redux/dialogs-reducer";
import {userType} from "./redux/users-reducer";
import {compose} from "redux";
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";

type MSTPPropsType = {
    profilePage: profileType,
    dialogsPage: dialogType,
    usersPage: userType,
    auth: authStateType,
    form: any
}
type MDTPPropsType = {
    authenticationMe: () => void,
}

export type AppPropsType = MSTPPropsType & MDTPPropsType
class App extends React.Component<AppPropsType, {}>{
    componentDidMount() {
        this.props.authenticationMe()
    }

    render() {

        return (
            <BrowserRouter>
                <div className="app">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="main_content">
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/profile/:userid?' render={() => <ProfileContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <LoginPage/>}/>

                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(null, {authenticationMe}))(App)

const SamuraiJSApp = (props: any) => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>

}

export default SamuraiJSApp