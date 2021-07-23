import {connect} from "react-redux";
import {
    followTC, getUsersTC,
    setCurrentPage, setToggleIsFetching,
    setUsers, toggleFollowingProgress, unfollowTC,
    userType
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../other/Preloader/Preloader"
import {stateAllType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import {
    getCurrentPage,
    getFollowingInProgress, getIsAuth,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsersRESelector
} from "../../redux/users-selectors";

type UsersContainerPropsType ={   // костыль со стекеОвер, типа типизации пропсов
    users: Array<userType>
    isAuth: boolean
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>

    followTC: (userID: number) => void
    unfollowTC: (userID: number) => void
    setUsers: (users: Array<userType>) => void
    setCurrentPage: (currentPage: number) => void
    setToggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<UsersContainerPropsType> {

    // constructor(props: PropsType) { super(props)} // если конструктор только кидает пропсы родителю, он не обязателен

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanger = (pageNumber: number) => {
        this.props.setToggleIsFetching(true);
        this.props.setCurrentPage(pageNumber)
        this.props.getUsersTC(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}

                follow={this.props.followTC}
                unfollow={this.props.unfollowTC}
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

    followTC: (userID: number) => void
    unfollowTC: (userID: number) => void
    setUsers: (users: Array<userType>) => void
    setCurrentPage: (currentPage: number) => void
    setToggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
}
const AuthRedirectComponent = (props: AuthRedirectComponentPropsType) => {
    if (!props.isAuth) return <Redirect to="/login"/>
    return <UsersContainer {...props}/>
}

// let MSTP = (state: stateAllType) => {
//     return {
//         users: state.usersPage.users,
//         isAuth: state.auth.isAuth,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }
let MSTP = (state: stateAllType) => {
    return {
        users: getUsersRESelector(state),
        isAuth: getIsAuth(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default connect(MSTP, {
    followTC, unfollowTC, setUsers, setCurrentPage,
    setToggleIsFetching, toggleFollowingProgress, getUsersTC
})(AuthRedirectComponent)