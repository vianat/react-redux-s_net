import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {stateAllType} from "../../redux/redux-store";
import {setUserData} from "../../redux/auth-reducer";

type HeaderContainerPropsType = {
    userId: number
    email: string
    login: string
    isFetching: boolean
    setUserData: (userId: number, email: string, login: string) => void
}

let instanse = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "d44a3fa4-9ee7-4a5f-b187-297bbdd88a59"}
})

class HeaderContainer extends React.Component<HeaderContainerPropsType, {}>{

    componentDidMount() {
        instanse.get(`auth/me`)
            .then(response => {
                if (response.data.resultCode === 0){
                    let {id, email, login} = response.data.data
                    debugger
                    this.props.setUserData(id, email, login)   // не видит АС

                }})
    }

    render() {
        return <Header/>
        // return <Header props={this.props}/>
    }

};

const mapStateToProps = (state: stateAllType) => ({}) // доступ к стейту даёт connect-provider
export default connect(mapStateToProps, {setUserData})(HeaderContainer)