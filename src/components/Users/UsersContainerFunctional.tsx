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

    const { users, pageSize, currentPage, isFetching, followingInProgress, totalUsersCount}
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

                follow={followTC}
                unfollow={unfollowTC}
                onPageChanger={onPageChanger}
                followingInProgress={followingInProgress}
            />
        </>
}

// type AuthRedirectComponentPropsType = {
//     users: Array<userType>
//     isAuth: boolean
//     pageSize: number
//     totalUsersCount: number
//     currentPage: number
//     isFetching: boolean
//     followingInProgress: Array<number>
//
//     followTC: (userID: number) => void
//     unfollowTC: (userID: number) => void
//     setUsers: (users: Array<userType>) => void
//     setCurrentPage: (currentPage: number) => void
//     setToggleIsFetching: (isFetching: boolean) => void
//     toggleFollowingProgress: (isFetching: boolean, userId: number) => void
// }
// const AuthRedirectComponent = (props: AuthRedirectComponentPropsType) => {
//     if (!props.isAuth) return <Redirect to="/login"/>
//     return <UsersContainerCOPY {...props}/>
// }
//
// let MSTP = (state: stateAllType) => {
//     return {
//         users: getUsersRESelector(state),
//         isAuth: getIsAuth(state),
//         pageSize: getPageSize(state),
//         totalUsersCount: getTotalUsersCount(state),
//         currentPage: getCurrentPage(state),
//         isFetching: getIsFetching(state),
//         followingInProgress: getFollowingInProgress(state)
//     }
// }
//
// export default connect(MSTP, {
//     followTC, unfollowTC, setUsers, setCurrentPage,
//     setToggleIsFetching, toggleFollowingProgress
// })(AuthRedirectComponent)