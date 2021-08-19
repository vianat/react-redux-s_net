import React from "react";
import {userType} from "../../redux/users-reducer";
import Paginator from "./../other/Paginator/Paginator";
import User from "./User";

type propsUsersType = {
    users: Array<userType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    followingInProgress: Array<number>
    portionSize: number

    follow: (userID: number) => void
    unfollow: (userID: number) => void
    onPageChanger: (page: number)=> void
}

const Users = (props: propsUsersType) => {

    return (
        <div>
            <Paginator users={props.users}
                       totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       portionSize={props.portionSize}
                       onPageChanger={props.onPageChanger}/>
            <div>
                {props.users.map(u => <User user={u}
                                            key={u.id}
                                            follow={props.follow}
                                            unfollow={props.unfollow}
                                            followingInProgress={props.followingInProgress}/>
                )}
            </div>
        </div>
    )
}

export default Users;