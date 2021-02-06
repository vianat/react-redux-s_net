import React from "react";
import css from "./Users.module.css";
import userPhoto from "../../Assets/images/images.png";
import {userType} from "../../redux/users-reducer";

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

    return <div>

        <div className={css.breadCrumbs}>
            {pages.map( p => {
                if(p === props.currentPage){        // костыль с if для смены стиля,
                    return <span className={style}       // нужно через условное присваивание в className={this.props.currentPage === p && css.selectedPages}
                                 onClick={ (e) => {props.onPageChanger(p)} }>{p}</span>
                }else {
                    return <span onClick={ (e) => {props.onPageChanger(p)} }>{p}</span>
                }
            })}
        </div>

        {
            props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <span>{u.name}</span>
                            <img src={userPhoto} alt="profile img"></img>
                        </div>
                        <div>
                            {u.followed     //
                                ? <button onClick={ () => {props.unfollow(u.id)}}> Unfollow</button>
                                : <button onClick={ () => {props.follow(u.id)}}> follow</button>}
                        </div>
                    </span>

                    <span>
                        <div> {"u.location.city"}</div>
                        <div> {"u.location.country"}</div>
                    </span>
                    <div><hr/></div>
                </div>
            )
        }
    </div>


}

export default Users;