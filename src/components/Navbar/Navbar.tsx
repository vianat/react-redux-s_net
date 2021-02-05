import React from 'react';
import {NavLink} from 'react-router-dom';
import css from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div className={css.navigation}>
            <div className={css.item}>
                <NavLink to="/profile" activeClassName={css.activeLink}>Profile</NavLink>
            </div>
            <hr/>
            <div className={css.item}>
                <NavLink to="/dialogs" activeClassName={css.activeLink}>Messages</NavLink>
            </div>
            <hr/>
            <div className={css.item}>
                <NavLink to="/users" activeClassName={css.activeLink}>Users</NavLink>
            </div>
            <hr/>
            <div className={css.item}>
                <NavLink to="/news" activeClassName={css.activeLink}>News</NavLink>
            </div>
            <hr/>
            <div className={css.item}>
                <NavLink to="/music" activeClassName={css.activeLink}>Music</NavLink>
            </div>
            <hr/>
            <div className={css.item}>
                <NavLink to="/settings" activeClassName={css.activeLink}>Settings</NavLink>
            </div>

        </div>
    )
}

export default Navbar;