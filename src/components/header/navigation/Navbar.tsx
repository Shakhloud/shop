import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./Navbar.module.css";

const Havbar = (props:any) => {
    return <div className={classes.navbar}>
        <NavLink to="/services" className={classes.kategorie__link}>
            <div className={classes.kategorie}>
                <span className={classes.kategorie__span}>Наши услуги</span>
            </div>
        </NavLink>
        <NavLink to="/example_print" className={classes.kategorie__link}>
            <div className={classes.kategorie}>
                <span className={classes.kategorie__span}>Пример печати</span>
            </div>
        </NavLink>
        <NavLink to="/promotion" className={classes.kategorie__link}>
            <div className={classes.kategorie}>
                <span className={classes.kategorie__span}>Акции и предложения</span>
            </div>
        </NavLink>
        <NavLink to="/top_sell" className={classes.kategorie__link}>
            <div className={classes.kategorie}>
                <span className={classes.kategorie__span}>Топ продаж</span>
            </div>
        </NavLink>
        <NavLink to="/catalog" className={classes.kategorie__link}>
            <div className={classes.kategorie}>
                <span className={classes.kategorie__span}>Каталог</span>
            </div>
        </NavLink>
        <NavLink to="/reviews" className={classes.kategorie__link}>
            <div className={classes.kategorie}>
                <span className={classes.kategorie__span}>Отзывы</span>
            </div>
        </NavLink>
        <NavLink to="/call_us" className={classes.kategorie__link}>
            <div className={classes.kategorie}>
                <span className={classes.kategorie__span}>Свяжитесь с нами</span>
            </div>
        </NavLink>
    </div>
}

export default Havbar;