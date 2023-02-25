import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import Auth from "./components/auth/Auth";
import {observer} from "mobx-react";
import {authService} from './store/Auth'


const App = observer(() => {
        const isAuth: boolean = authService.getAuth();
        const navigate = useNavigate();
        useEffect(() => {
            navigate('/');
        }, [])

        return (
            <div className='wrapper'>
                {!isAuth &&
                    <div className='auth'>
                        <Auth/>
                    </div>
                }
                <div className={'main' + ' ' + (isAuth ? '' : 'disable')}>
                    <Header/>
                    <Content/>
                    <Footer/>
                </div>
            </div>
        );
    }
)

export default App;
