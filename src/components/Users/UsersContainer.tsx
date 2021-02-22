import {connect} from "react-redux";
import {
    follow,
    setCurrentPage, setToggleIsFetching, setTotalUsersCount,
    setUsers,
    unfollow,
    userType
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../other/Preloader/Preloader"
import {stateAllType} from "../../redux/redux-store";

type UsersContainerPropsType ={   // костыль со стекеОвер, типа типизации пропсов
    users: Array<userType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<userType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (count: number) => void
    setToggleIsFetching: (isFetching: boolean) => void
}

class UsersContainer extends React.Component<UsersContainerPropsType> {

    // constructor(props: PropsType) { super(props)} // если конструктор только кидает пропсы родителю, он не обязателен

    componentDidMount() {
        this.props.setToggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{
                withCredentials: true,
                headers: {"API-KEY": "c062bc67-53d6-4d4c-a2dc-1d65e21a089d"}
            })
            .then(response => {
                this.props.setToggleIsFetching(false);
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanger = (pageNumber: number) => {
        this.props.setToggleIsFetching(true);
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setToggleIsFetching(false);
                this.props.setUsers(response.data.items)
            }
        )
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/>: null}
            <Users
                users={this.props.users}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                onPageChanger={this.onPageChanger}/>
        </>
    }
}

let mapStateToProps = (state: stateAllType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch: any) => {
//     return {
//         follow:   (userID: number) => {dispatch(followAC(userID))},
//         unfollow: (userID: number) => {dispatch(unfollowAC(userID))},
//         setUsers: (users: Array<userType>) => {dispatch(setUsersAC(users))},
//         setCurrentPage: (currentPage: number) => {dispatch(setCurrentPageAC(currentPage))},
//         setTotalUsersCount: (count: number) => {dispatch(setTotalUsersCountAC(count))},
//         setTotalUsersCount: (isFetching: boolean) => {dispatch(setToggleIsFetchingAC(isFetching))}
//     }
// }

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setToggleIsFetching})(UsersContainer)