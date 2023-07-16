import React, {useEffect, useState} from 'react';
import Button from "../../../../ui/Button/Button";
import DropMenuButton from "../../../../ui/DropMenuButton/DropMenuButton";
import classes from "./HeaderActiveMenu.module.scss";

const HeaderActiveMenu = () => {

    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {

    }, [isAuth])

    const clickHandler = () => {
        setIsAuth(!isAuth)
    }


    return (
        <>
            {isAuth ?
                <div className={classes.menu}>
                    <DropMenuButton  style={{marginTop: 45}} onClick={clickHandler}>войти</DropMenuButton>
                </div> :

                <div className={classes.menu}>
                    <DropMenuButton style={{marginTop: 45}} onClick={clickHandler}>выход</DropMenuButton>
                    <DropMenuButton style={{marginTop: 90}}>сменить&nbsp;пароль</DropMenuButton>
                    <DropMenuButton style={{marginTop: 137}}>поддержать</DropMenuButton>
                    <DropMenuButton style={{marginTop: 184}}>о нас</DropMenuButton>
                </div>

            }
        </>


    );
};

export default HeaderActiveMenu;