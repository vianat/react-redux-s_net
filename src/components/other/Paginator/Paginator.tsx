// import React from "react";
// import css from "./Paginator.module.css";
// import {userType} from "../../../redux/users-reducer";
//
// type propsPaginatorType = {
//     users: Array<userType>
//     totalUsersCount: number
//     pageSize: number
//     currentPage: number
//
//     onPageChanger: (page: number)=> void
// }
//
// const Paginator = (props: propsPaginatorType) => {
//     let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
//     let pages = []
//     let style = css.selectedPages
//     for (let i = 1; i <= pagesCount; i++){
//         pages.push(i)
//     }
//
//     return <div className={css.breadCrumbs}>
//             {pages.map( p => {
//                 if(p === props.currentPage){        // костыль с if для смены стиля,
//                     return <span key={p} className={style} onClick={ (e) => {props.onPageChanger(p)} }>{p}</span> // нужно через условное присваивание в className={this.props.currentPage === p && css.selectedPages}
//                 }else {
//                     return <span key={p} onClick={ (e) => {props.onPageChanger(p)} }>{p}</span>
//                 }
//             })}
//         </div>
// }
//
// export default Paginator;

import styles from "./Paginator.module.css";
import React, {useState} from "react";
import {userType} from "../../../redux/users-reducer";

export type PaginatorPropsType = {
    users: Array<userType>
    currentPage: number;
    pageSize: number;
    totalUsersCount: number;
    portionSize: number;

    onPageChanger: (page: number)=> void
}

const Paginator = (props: PaginatorPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) //округляем в большую сторону
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount/props.portionSize)
    let [portionNumber,setPortionNumber] = useState<number>(1)
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    let rightPortionPageNumber = portionNumber * props.portionSize

    return <div className={styles.paginator}>

        { portionNumber > 1 &&
        <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }

        {pages
            .filter(p => p >= leftPortionPageNumber && p<= rightPortionPageNumber)
            .map(p => {
                return <span
                    className={props.currentPage === p ? styles.selectedPage : ''}
                    key={p}
                    onClick={() => {
                        props.onPageChanger(p)
                    }}>{p}</span>
            })}

        { portionCount > portionNumber &&
        <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }

    </div>
}
export default Paginator;