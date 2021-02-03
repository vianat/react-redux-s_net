import React from 'react';
import {userType} from "../../redux/users-reducer";

type userPropsType = {
    users: Array<userType>
    follow: (userID: number)=> void,
    unfollow: (userID: number)=> void
    setUsers: (users: Array<userType>) => void
}

const Users = (props: userPropsType) => {

    if(props.users.length === 0){     // инициализируем стейт принудительно
        props.setUsers([
            {id: 1, photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8LOaJsHOpxe04L9zVAU3oRGrhKtcn-hirSQ&usqp=CAU",
                followed: false, fullName: "Masha", status: "the boss",  location:{city: "Sacramento", country: "USA"}},
            {id: 2, photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8LOaJsHOpxe04L9zVAU3oRGrhKtcn-hirSQ&usqp=CAU",
                followed: true,  fullName: "Dasha", status: "the fufel", location:{city: "Boston", country: "USA"}},
            {id: 3, photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8LOaJsHOpxe04L9zVAU3oRGrhKtcn-hirSQ&usqp=CAU",
                followed: false, fullName: "Pasha", status: "the mufel", location:{city: "Denwer", country: "USA"}}
        ])
    }

    return <div>
        {
            props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} alt="profile img"></img>
                        </div>
                        <div>
                            {u.followed     //
                            ? <button onClick={ () => {props.unfollow(u.id)}}> Unfollow</button>
                            : <button onClick={ () => {props.follow(u.id)}}> follow</button>}
                        </div>
                    </span>

                    <span>
                        <div> {u.location.city}</div>
                        <div> {u.location.country}</div>
                    </span>
                </div>
            )
        }
    </div>
}

export default Users;