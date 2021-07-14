import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {stateAllType} from "../../redux/redux-store";
import {authenticationMe, logout} from "../../redux/auth-reducer";

type MapStateToPropsType = {
    isAuth: boolean | null
    login: string | null
}
type MapDispatchToPropsType = {
    authenticationMe: () => void
    logout: () => void
}
export type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType, {}>{

    componentDidMount() {
        this.props.authenticationMe()
    }
    render() {
        return <Header {...this.props} />
    }
}

const MSTP = (state: stateAllType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, stateAllType>
            (MSTP, {authenticationMe, logout})(HeaderContainer)