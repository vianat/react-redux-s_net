import React from "react";
import css from "./Users.module.css";
import userPhoto from "../../Assets/images/images.png";
import {NavLink} from "react-router-dom";
import {userType} from "../../redux/users-reducer";

type propsUserType = {
    user: userType,
    key: number,

    followingInProgress: Array<number>
    follow: (userID: number) => void,
    unfollow: (userID: number) => void
}

const User = (props: propsUserType) => {

    return <div>
                <span>
                    <div>
                        <NavLink to={"/profile" + props.user.id}>
                            <img src={props.user.photos.small != null ? props.user.photos : userPhoto} className={css.userPhoto}
                                     alt="profile img">userPhoto</img>
                        </NavLink>
                        <div>{props.user.name}</div>
                    </div>

                    <div>
                        {props.user.followed
                            ? <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                      onClick={() => {
                                              props.unfollow(props.user.id)
                                      }}
                            >Unfollow</button>

                            : <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                      onClick={() => {
                                          props.follow(props.user.id)
                            }}>follow</button>
                        }
                    </div>
                </span>

                <span>
                    <div> {props.user.status}</div>
                    <div> {props.user.followed}</div>
                </span>
        <hr/>
    </div>

}

export default User;