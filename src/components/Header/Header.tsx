import React from 'react';
import css from './Header.module.css'

const Header = () => {
    return <header className={css.header}>
                <img alt="logo" className={css.logo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiDDGTDTlafeux6oOArgvg8W4Oup3WlMckUA&usqp=CAU"/>
            </header>
}

export default Header;