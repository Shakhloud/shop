import React from 'react';
import classes from "./Top.module.css";
import searchicon from "./../../../img/header/top/lupa.svg";
import logo from "./../../../img/header/top/logo.png";
import cart from "./../../../img/header/top/cart.svg";
import like from "./../../../img/header/top/like.svg";


const Top = (props:any) => {
    return <div className={classes.top}>
        <form action="#" method="get">
            <div className={classes.search}>
                <img className={classes.search__icon}
                    alt={"Иконка поиска"}
                    src={searchicon}/>
                <input className={classes.search__form} type="text" placeholder="Поиск"/>
            </div>
        </form>
        <div className={classes.logo}>
            <a href="#">
                <img
                     alt={"Логотип"}
                     src={logo}/>
            </a>
        </div>
        <div className={classes.languages}>
            <span>RU |</span> UA
        </div>
        <div className={classes.icons}>
            <img className={classes.cart}
                 alt={"Иконка корзины"}
                 src={cart}/>
            <img className={classes.like}
                 alt={"Иконка сердца"}
                 src={like}/>
        </div>
    </div>
}

export default Top;