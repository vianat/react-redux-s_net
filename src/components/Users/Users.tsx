import React from 'react';
import {userType} from "../../redux/users-reducer";
import axios from "axios";
import userPhoto from "./../../Assets/images/images.png"

interface State {}  // костыль взял на стекеОвер, типа типизации пропсов
interface PropsType {   // костыль взял на стекеОвер, типа типизации пропсов
    users: Array<userType>
    follow: (userID: number)=> void,
    unfollow: (userID: number)=> void
    setUsers: (users: Array<userType>) => void
}

class Users extends React.Component< PropsType, State > {

    constructor(props: PropsType) {  // при вызове компоненты, происходит создание обьекта и иницилизируем стейт
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
             .then( response => {this.props.setUsers(response.data.items)} )
    }

    render() {
        return <div>
            {
                this.props.users.map(u =>
                    <div key={u.id}>
                    <span>
                        <div>
                            <span>{u.name}</span>
                            <img src={userPhoto} alt="profile img"></img>
                        </div>
                        <div>
                            {u.followed     //
                                ? <button onClick={ () => {this.props.unfollow(u.id)}}> Unfollow</button>
                                : <button onClick={ () => {this.props.follow(u.id)}}> follow</button>}
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
}

export default Users;