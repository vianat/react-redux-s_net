import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/LoginPage";
import {connect} from "react-redux";
import store, {stateAllType} from "./redux/redux-store";
import {authStateType} from "./redux/auth-reducer";
import {profileType} from "./redux/profile-reducer";
import {dialogType} from "./redux/dialogs-reducer";
import {userType} from "./redux/users-reducer";
import {compose} from "redux";
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";
import {initializeAppTC} from "./redux/app-reducer";
import Preloader from "./components/other/Preloader/Preloader";
import {UsersContainerFunctional} from "./components/Users/UsersContainerFunctional";
import {WithSuspense} from "./hoc/WithSuspense";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const News = React.lazy(() => import('./components/News/News'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const Music = React.lazy(() => import('./components/Music/Music'));

type MSTPPropsType = {
    profilePage: profileType,
    dialogsPage: dialogType,
    usersPage: userType,
    auth: authStateType,
    form: any,
    initialized: boolean
}
type MDTPPropsType = {
    initializeAppTC: () => void,
}

export type AppPropsType = MSTPPropsType & MDTPPropsType

class App extends React.Component<AppPropsType, {}> {
    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app">
                <HeaderContainer/>
                <Navbar/>
                <div className="main_content">
                    <Route path='/dialogs' render={WithSuspense(DialogsContainer)}/>
                    <Route path='/profile/:userid?' render={WithSuspense(ProfileContainer)}/>

                    <Route path='/users' render={() => <UsersContainerFunctional/>}/>
                    {/*<Route path='/users' render={() => WithSuspense(UsersContainerFunctional)}/>*/}
                    <Route path='/login' render={() => WithSuspense(LoginPage)}/>

                    <Route path='/news' render={WithSuspense(News)}/>
                    <Route path='/music' render={WithSuspense(Music)}/>
                    <Route path='/settings' render={WithSuspense(Settings)}/>
                </div>
            </div>
        );
    }
}

const MSTP = (state: stateAllType) => ({
    initialized: state.app.initialized
})

const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(MSTP, {initializeAppTC}))(App)

const SamuraiJSApp = (props: any) => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>

}

export default SamuraiJSApp