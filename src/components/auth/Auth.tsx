import React, {useRef, useState} from 'react';
import classes from "./Auth.module.css";
import {authService} from './../../store/Auth'
import {server, AuthResponse} from './../../store/Server'
import {observer} from "mobx-react";


const Auth = observer((props: any) => {
        const loginRef = useRef(null);
        const passwordRef = useRef(null);
        const [isError,setIsError] = useState(false);
        const isAuth: boolean = authService.getAuth();
        const isAuthBtnHandler = () => {
            const loginInput: any = loginRef.current;
            const passwordInput: any = passwordRef.current;
            const authResponse: AuthResponse = server.makeAuth(loginInput.value, passwordInput.value);
            authService.setAuth(authResponse.isAuth);
            authService.setLogin(authResponse.login);
            authService.setRole(authResponse.role);
            setIsError(!authResponse.isAuth);
        }

        return (
            <div className={classes.container}>
                <div className={classes.container__title}>Вход</div>
                <div className={classes.container__main}>
                    <input className={classes.container__form} type="text" name='login' ref={loginRef}/>
                    <input className={classes.container__form} type="password" name='password' ref={passwordRef}/>
                </div>
                {isError &&
                    <div className={classes.container__error}>
                        Неправильный логин или пароль.
                    </div>
                }
                <div>
                    <button onClick={isAuthBtnHandler} className={classes.container__inputBtn}>Вход</button>
                </div>
            </div>
        )
    }
)
export default Auth;