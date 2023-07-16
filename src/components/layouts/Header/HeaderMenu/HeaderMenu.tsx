import React, {useState} from 'react';
import classes from './HeaderMenu.module.scss'
import Button from "../../../ui/Button/Button";
import HeaderActiveMenu from "./HeaderActiveMenu/HeaderActiveMenu";

const HeaderMenu = () => {
    const [isActive, setIsActive] = useState(false)
    const clickHandler = () => {
        setIsActive(!isActive)
    }

    return (
        <div className={classes.container}>
            <Button style={{backgroundColor: '#585DFB'}}>
                <span className={classes.create}>create ad 🧑🏼‍💻‍</span>
            </Button>
            <Button style={{backgroundColor: '#9BCAF5'}}>
                <span className={classes.myAds}>my ads 📢</span>
            </Button>
            <Button onClick={clickHandler}
                style={{backgroundColor: '#FFDD49'}}>
                <span className={classes.menu}>...</span>
            </Button>
            {isActive ? <HeaderActiveMenu/> : ''}
        </div>
    );
};

export default HeaderMenu;