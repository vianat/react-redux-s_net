import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage, setToggleIsFetching,
    setUsers, toggleFollowingProgress, unfollow,
    userType
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../other/Preloader/Preloader"
import {stateAllType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

type UsersContainerPropsType ={   // костыль со стекеОвер, типа типизации пропсов
    users: Array<userType>
    isAuth: boolean
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>

    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<userType>) => void
    setCurrentPage: (currentPage: number) => void
    setToggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<UsersContainerPropsType> {

    // constructor(props: PropsType) { super(props)} // если конструктор только кидает пропсы родителю, он не обязателен

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanger = (pageNumber: number) => {
        this.props.setToggleIsFetching(true);
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}

                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChanger={this.onPageChanger}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

type AuthRedirectComponentPropsType = {
    users: Array<userType>
    isAuth: boolean
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>

    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<userType>) => void
    setCurrentPage: (currentPage: number) => void
    setToggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}
const AuthRedirectComponent = (props: AuthRedirectComponentPropsType) => {
    if (props.isAuth) return <Redirect to="/login"/>
    return <UsersContainer {...props}/>
}

let mapStateToProps = (state: stateAllType) => {
    return {
        users: state.usersPage.users,
        isAuth: state.auth.isAuth,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage,
    setToggleIsFetching, toggleFollowingProgress, getUsers
})(AuthRedirectComponent)