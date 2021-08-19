import {useDispatch, useSelector} from "react-redux";
import {
    actionsTypes,
    followTC, getUsersTC,
    setCurrentPage, setToggleIsFetching, unfollowTC
} from "../../redux/users-reducer";
import React, {Dispatch, useEffect} from "react";
import Users from "./Users";
import Preloader from "../other/Preloader/Preloader"
import {stateAllType} from "../../redux/redux-store";

export const UsersContainerFunctional = () => {

    const selectStateUsersPage = (state:stateAllType) => state.usersPage

    const { users, pageSize, portionSize, currentPage, isFetching, followingInProgress, totalUsersCount}
    = useSelector(selectStateUsersPage )

    const dispatch = useDispatch<Dispatch<actionsTypes>>()

    useEffect( () => {getUsersTC(currentPage, pageSize)(dispatch)},[dispatch, currentPage, pageSize])

    const onPageChanger = (pageNumber: number) => {
        setToggleIsFetching(true);
        setCurrentPage(pageNumber)
        getUsersTC(pageNumber, pageSize)(dispatch)
    }

        return <>
            {isFetching ? <Preloader/> : null}
            <Users
                users={users}
                currentPage={currentPage}
                pageSize={pageSize}
                totalUsersCount={totalUsersCount}
                portionSize={portionSize}

                follow={followTC}
                unfollow={unfollowTC}
                onPageChanger={onPageChanger}
                followingInProgress={followingInProgress}
            />
        </>
}