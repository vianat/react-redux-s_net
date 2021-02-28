import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {stateAllType} from "../../redux/redux-store";
import {authenticationMe} from "../../redux/auth-reducer";

type MapStateToPropsType = {
    isAuth: boolean | null
    login: string | null
}
type MapDispatchToPropsType = {
    authenticationMe: () => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<PropsType, {}>{

    componentDidMount() {
        this.props.authenticationMe()
    }
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: stateAllType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect<MapStateToPropsType, MapDispatchToPropsType, {},
    stateAllType>(mapStateToProps, {authenticationMe})(HeaderContainer)