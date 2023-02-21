import React from 'react';
import classes from "./Navbar.module.css";

const Havbar = (props:any) => {
    return <div className={classes.navbar}>
        <a href="#" className={classes.kategorie__link}>
            <div className={classes.kategorie}>
                <span className={classes.kategorie__span}>Наши услуги</span>
            </div>
        </a>
        <a href="#" className={classes.kategorie__link}>
            <div className={classes.kategorie}>
                <span className={classes.kategorie__span}>Пример печати</span>
            </div>
        </a>
        <a href="#" className={classes.kategorie__link}>
            <div className={classes.kategorie}>
                <span className={classes.kategorie__span}>Акции и предложения</span>
            </div>
        </a>
        <a href="#" className={classes.kategorie__link}>
            <div className={classes.kategorie}>
                <span className={classes.kategorie__span}>Топ продаж</span>
            </div>
        </a>
        <a href="#" className={classes.kategorie__link}>
            <div className={classes.kategorie}>
                <span className={classes.kategorie__span}>Каталог</span>
            </div>
        </a>
        <a href="#" className={classes.kategorie__link}>
            <div className={classes.kategorie}>
                <span className={classes.kategorie__span}>Отзывы</span>
            </div>
        </a>
        <a href="#" className={classes.kategorie__link}>
            <div className={classes.kategorie}>
                <span className={classes.kategorie__span}>Свяжитесь с нами</span>
            </div>
        </a>
    </div>
}

export default Havbar;