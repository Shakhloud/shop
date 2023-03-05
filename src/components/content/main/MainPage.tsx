import React from 'react';
import classes from "./MainPage.module.css";
import bg from './../../../img/content/main/bg.png'
import {NavLink} from "react-router-dom";


const MainPage = () => {
    return (
        <div className={classes.container}>
            <div className={classes.title}>masons<br/><span>branding</span><br/>wordshop</div>
            <div className={classes.desc}>Высококачественная печать<br/>Брендирование одежды и аксессуаров</div>
                <NavLink to="/catalog" className={classes.kategorie__link}>
                    <div className={classes.katalog__btn}>
                        Каталог
                    </div>
                </NavLink>
            <div className={classes.bg}><img src={bg} alt="Фоновая фотка"/></div>
        </div>
    )
}
export default MainPage;