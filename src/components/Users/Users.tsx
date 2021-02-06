import React from 'react';
import {userType} from "../../redux/users-reducer";
import axios from "axios";
import userPhoto from "./../../Assets/images/images.png"
import css from "./Users.module.css"

interface State {}  // костыль взял на стекеОвер, типа типизации пропсов
interface PropsType {   // костыль взял на стекеОвер, типа типизации пропсов
    users: Array<userType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    follow: (userID: number)=> void,
    unfollow: (userID: number)=> void
    setUsers: (users: Array<userType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (count: number) => void
}

class Users extends React.Component< PropsType, State > {

    // constructor(props: PropsType) { super(props)} // если конструктор только кидает пропсы родителю, он не обязателен

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
             .then( response => {
                 this.props.setUsers(response.data.items)
                 this.props.setTotalUsersCount(response.data.totalCount)
             })
    }

    onPageChanger = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then( response => {this.props.setUsers(response.data.items)} )
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = []
        let style = css.selectedPages
        for (let i = 1; i <= pagesCount; i++){pages.push(i)}

        return <div>

            <div className={css.breadCrumbs}>
                {pages.map( p => {
                    if(p === this.props.currentPage){        // костыль с if для смены стиля,
                        return <span className={style}       // нужно через условное присваивание в className={this.props.currentPage === p && css.selectedPages}
                                     onClick={ (e) => {this.onPageChanger(p)} }>{p}</span>
                    }else {
                        return <span onClick={ (e) => {this.onPageChanger(p)} }>{p}</span>
                    }
                })}
            </div>

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