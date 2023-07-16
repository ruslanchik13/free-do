import React from 'react';
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import classes from './Header.module.scss'
import HeaderMenu from "./HeaderMenu/HeaderMenu";

const Header = () => {
    return (
        <div className={classes.header}>
            <HeaderLogo/>
            <HeaderMenu/>
        </div>
    );
};

export default Header;