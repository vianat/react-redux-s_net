import React from 'react';
import css from "./Navbar.module.css"

const Navbar = () => {
    return <div className={css.navigation}>
        <div>
            <a href="/profile">Profile</a>
        </div>
        <div>
            <a href="/dialogs">Messeges</a>
        </div>
        <div>
            <a href="/profile">News</a>
        </div>
        <div>
            <a href="/profile">Music</a>
        </div>
        <div>
            <a href="/profile">Settings</a>
        </div>

    </div>
}

export default Navbar;