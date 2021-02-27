import {connect} from "react-redux";
import {
    follow,
    setCurrentPage, setToggleIsFetching, setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    unfollow,
    userType
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../other/Preloader/Preloader"
import {stateAllType} from "../../redux/redux-store";
import {usersAPI} from "../../api/api";

type UsersContainerPropsType ={   // костыль со стекеОвер, типа типизации пропсов
    users: Array<userType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>

    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<userType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (count: number) => void
    setToggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void

}

class UsersContainer extends React.Component<UsersContainerPropsType> {

    // constructor(props: PropsType) { super(props)} // если конструктор только кидает пропсы родителю, он не обязателен

    componentDidMount() {
        this.props.setToggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setToggleIsFetching(false);
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            });
    }

    onPageChanger = (pageNumber: number) => {
        this.props.setToggleIsFetching(true);
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setToggleIsFetching(false);
                this.props.setUsers(data.items)
            }
        )
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                onPageChanger={this.onPageChanger}
                followingInProgress={this.props.followingInProgress}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                />
        </>
    }
}

let mapStateToProps = (state: stateAllType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setToggleIsFetching, toggleFollowingProgress
})(UsersContainer)