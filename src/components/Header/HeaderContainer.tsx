import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {stateAllType} from "../../redux/redux-store";
import {setUserData} from "../../redux/auth-reducer";

let instanse = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "c062bc67-53d6-4d4c-a2dc-1d65e21a089d"}
})

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
        instanse.get(`auth/me`)
            .then(response => {
                if (response.data.resultCode === 0){
                    let {id, email, login} = response.data.data
                    debugger
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