import React from "react";
import css from "./Paginator.module.css";
import {userType} from "../../../redux/users-reducer";

type propsPaginatorType = {
    users: Array<userType>
    totalUsersCount: number
    pageSize: number
    currentPage: number

    onPageChanger: (page: number)=> void
}

const Paginator = (props: propsPaginatorType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = []
    let style = css.selectedPages
    for (let i = 1; i <= pagesCount; i++){
        pages.push(i)
    }

    return <div className={css.breadCrumbs}>
            {pages.map( p => {
                if(p === props.currentPage){        // костыль с if для смены стиля,
                    return <span key={p} className={style} onClick={ (e) => {props.onPageChanger(p)} }>{p}</span> // нужно через условное присваивание в className={this.props.currentPage === p && css.selectedPages}
                }else {
                    return <span key={p} onClick={ (e) => {props.onPageChanger(p)} }>{p}</span>
                }
            })}
        </div>
}

export default Paginator;