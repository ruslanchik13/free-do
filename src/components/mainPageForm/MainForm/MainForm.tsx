import React from 'react';
import Input from "../../ui/Input/Input";
import classes from "./MainForm.module.scss";
import DropDown from "../../ui/DropDown/DropDown";


const MainForm = () => {
    return (
        <form className={classes.form}>
            <Input placeholder='Ввод...'/>
            <DropDown/>
        </form>
    );
};

export default MainForm;