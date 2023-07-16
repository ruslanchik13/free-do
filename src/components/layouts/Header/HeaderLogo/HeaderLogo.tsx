import React from 'react';
import classes from './HeaderLogo.module.scss'
import logo from './../../../../assets/img/logo.png'

const HeaderLogo = () => {
    return (
        <div className={classes.container}>
            <img src={logo} alt="logo"/>
        </div>
    );
};

export default HeaderLogo;