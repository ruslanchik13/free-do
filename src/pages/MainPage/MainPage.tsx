import React, {useState} from 'react';
import CardList from "../../components/mainPageCard/CardList/CardList";
import MainForm from "../../components/mainPageForm/MainForm/MainForm";
import classes from './MainPage.module.scss'

const MainPage = () => {


    return (
        <div className={classes.main}>
            <MainForm/>
            <CardList />
        </div>
    );
};

export default MainPage;