import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC, userType} from "../../redux/users-reducer";

let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        follow:   (userID: number) => {dispatch(followAC(userID))},
        unfollow: (userID: number) => {dispatch(unfollowAC(userID))},
        setUsers: (users: Array<userType>) => {dispatch(setUsersAC(users))},
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;





