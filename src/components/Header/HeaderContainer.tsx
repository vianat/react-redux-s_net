import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {stateAllType} from "../../redux/redux-store";
import {setUserData} from "../../redux/auth-reducer";
import {usersAPI} from "../../api/api";

type MapStateToPropsType = {
    isAuth: boolean | null
    login: string | null
}
type MapDispatchToPropsType = {
    setUserData: (userId: number, email: string, login: string) => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<PropsType, {}>{

    componentDidMount() {
        usersAPI.authMe().then(data => {
                if (data.resultCode === 0){
                    let {id, email, login} = data.data
                    this.props.setUserData(id, email, login)
                }})
    }
    render() {
        return <Header {...this.props} />
    }
};

const mapStateToProps = (state: stateAllType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, stateAllType>(mapStateToProps, {setUserData})(HeaderContainer)