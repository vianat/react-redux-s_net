import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css'

type HeaderPropsType = {
    // userId: number,
    // email: string,
    // login: string,
    // isFetching: boolean
}
const Header = (props:HeaderPropsType) => {
    return <header className={css.header}>
                <img alt="logo" className={css.logo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiDDGTDTlafeux6oOArgvg8W4Oup3WlMckUA&usqp=CAU"/>

                <div className={css.loginBlock}>
                    <NavLink to="/login">Login</NavLink>
                </div>
            </header>
}

export default Header;