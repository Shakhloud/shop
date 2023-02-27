import React, {useEffect} from 'react';
import classes from "./Top.module.css";
import searchicon from "./../../../img/header/top/lupa.svg";
import logo from "./../../../img/header/top/logo.png";
import cart from "./../../../img/header/top/cart.svg";
import exit from "./../../../img/header/top/exit.svg";
import {authService} from './../../../store/Auth';
import {NavLink, useNavigate} from "react-router-dom";
import {observer} from "mobx-react";
import {basketService} from "../../../store/Basket";
import {server} from "../../../store/Server";

const Top = observer((props: any) => {
        const navigate = useNavigate();
        const basket = basketService.getBasket();

        const unAuthHandler = () => {
            navigate('/');
            authService.setAuth(false);
            authService.setRole(null);
            authService.setLogin(null);
            basketService.setBasket(null);
        }

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
            {authService.getAuth() &&
                <div className={classes.loginName}>
                    {authService.getLogin()}
                </div>
            }
            <div className={classes.icons}>
                <NavLink to={'/basket'}>
                    <div className={classes.cart}>
                        {basket?.items.length !== 0 &&
                            <div className={classes.countItem}>
                                {basket?.items.length}
                            </div>
                        }
                        <img
                             alt={"Иконка корзины"}
                             src={cart}/>
                    </div>
                </NavLink>
                <img onClick={unAuthHandler} className={classes.exit}
                     alt={"Иконка выхода"}
                     src={exit}/>
            </div>
        </div>
    }
)
export default Top;