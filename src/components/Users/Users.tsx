import React from "react";
import css from "./Users.module.css";
import userPhoto from "../../Assets/images/images.png";
import {userType} from "../../redux/users-reducer";
import { NavLink } from "react-router-dom";
import axios from "axios";

type propsUsersType = {
    users: Array<userType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    follow: (userID: number) => void,
    unfollow: (userID: number) => void
    onPageChanger: (page: number)=> void
}

const Users = (props: propsUsersType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = []
    let style = css.selectedPages
    for (let i = 1; i <= pagesCount; i++){pages.push(i)}

    let axiosSETUP = axios.create({
        withCredentials: true,
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        headers: {"API-KEY": "c062bc67-53d6-4d4c-a2dc-1d65e21a089d"}
    })

    return <div>

        <div className={css.breadCrumbs}>
            {pages.map( p => {
                if(p === props.currentPage){        // костыль с if для смены стиля,
                    return <span key={p} className={style} onClick={ (e) => {props.onPageChanger(p)} }>{p}</span> // нужно через условное присваивание в className={this.props.currentPage === p && css.selectedPages}
                }else {
                    return <span key={p} onClick={ (e) => {props.onPageChanger(p)} }>{p}</span>
                }
            })}
        </div>

        {
            props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile" + u.id}>
                                <img src={u.photos.small != null ? u.photos : userPhoto} className={css.userPhoto} alt="profile img"></img>
                            </NavLink>
                            <div>{u.name}</div>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={ () => {
                                    axiosSETUP.delete(`follow?${u.id}`)
                                        .then(response => {
                                            if(response.data.resultCode === 0) {props.unfollow(u.id)}
                                        });
                                }}>Unfollow</button>

                                : <button onClick={ () => {
                                    axiosSETUP.post(`follow?${u.id}`,{} )
                                        .then(response => {
                                            if(response.data.resultCode === 0) {props.follow(u.id)}
                                        });
                                }}> follow</button>}
                        </div>
                    </span>

                    <span>
                        <div> {u.status}</div>
                        <div> {u.followed}</div>
                    </span>
                    <hr/>
                </div>
            )
        }
    </div>


}

export default Users;