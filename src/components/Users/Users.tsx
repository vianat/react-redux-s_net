import React from "react";
import css from "./Users.module.css";
import userPhoto from "../../Assets/images/images.png";
import {userType} from "../../redux/users-reducer";
import {NavLink } from "react-router-dom";

type propsUsersType = {
    users: Array<userType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    followingInProgress: Array<number>

    follow: (userID: number) => void,
    unfollow: (userID: number) => void
    onPageChanger: (page: number)=> void
}

const Users = (props: propsUsersType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = []
    let style = css.selectedPages
    for (let i = 1; i <= pagesCount; i++){pages.push(i)}

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
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={ () => { props.unfollow(u.id)} }
                                >Unfollow</button>

                                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={ () => { props.follow(u.id)} }>follow</button>}
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