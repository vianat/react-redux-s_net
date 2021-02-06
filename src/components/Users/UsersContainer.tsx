import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    userType
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";

interface State {
}  // костыль со стекеОвер, типа типизации пропсов
interface PropsType {   // костыль со стекеОвер, типа типизации пропсов
    users: Array<userType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    follow: (userID: number) => void,
    unfollow: (userID: number) => void
    setUsers: (users: Array<userType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (count: number) => void
}

class UsersContainer extends React.Component<PropsType, State> {

    // constructor(props: PropsType) { super(props)} // если конструктор только кидает пропсы родителю, он не обязателен

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanger = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <Users
            users={this.props.users}
            currentPage={this.props.currentPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            onPageChanger={this.onPageChanger}
        />
    }
}

let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        follow:   (userID: number) => {dispatch(followAC(userID))},
        unfollow: (userID: number) => {dispatch(unfollowAC(userID))},
        setUsers: (users: Array<userType>) => {dispatch(setUsersAC(users))},
        setCurrentPage: (currentPage: number) => {dispatch(setCurrentPageAC(currentPage))},
        setTotalUsersCount: (count: number) => {dispatch(setTotalUsersCountAC(count))}
    }
}

// let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

// export default UsersContainer;