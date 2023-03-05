import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/header/Header";
import Main from "./components/content/Main";
import Footer from "./components/footer/Footer";
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import Auth from "./components/auth/Auth";
import {observer} from "mobx-react";
import {authService} from './store/Auth'
import {server} from "./store/Server";
import {basketService} from "./store/Basket";


const App = observer(() => {
        const isAuth: boolean = authService.getAuth();
        const navigate = useNavigate();
        useEffect(() => {
            navigate('/');
            //Удалить после разработки
            const login = authService.getLogin();
            if (!login) return;
            const basket = server.getBasket(login);
            basketService.setBasket(basket);
        }, [])
        if (!isAuth) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return (
            <div className='wrapper'>
                {!isAuth &&
                    <div className='auth'>
                        <Auth/>
                    </div>}
                <div className={'main' + ' ' + (isAuth ? '' : 'disable')}>
                    <Header/>
                    <Main/>
                    <Footer/>
                </div>
            </div>
        );
    }
)

export default App;
