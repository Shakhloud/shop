import React from 'react';
import classes from "./Footer.module.css";
import logo from './../../img/footer/logo.png';
import telegram from './../../img/footer/telegram.png';
import inst from './../../img/footer/instagram.png';
import {NavLink} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {server} from "../../store/Server";
import {emailValidator, rangeStringLengthValidator, telephoneValidator} from "../../utils/FormikValidators";

const Footer = () => {
    return <div className={classes.wrapper}>
        <div className={classes.container}>
            <div className={classes.logoPlusLinks}>
                <img src={logo} alt="Логотип"/>
                <div>
                    <a href="#"><img src={telegram} alt="Telegram"/></a>
                    <a href="#"><img src={inst} alt="Instagram"/></a>
                </div>
            </div>
            <div className={classes.information}>
                <div className={classes.block__title}>
                    Информация
                </div>
                <div className={classes.links}>
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
            </div>
            <div className={classes.contact}>
                <div className={classes.block__title}>
                    Контакты
                </div>
                <div className={classes.links}>
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
            </div>
            <div className={classes.novelties}>
                <div className={classes.novelties__title}>Узнавай о новинках
                    первым<span>Получай от нас смс с сюрпризами</span></div>
                <Formik
                    initialValues={{
                        email: '',
                    }}
                    onSubmit={(values) => {
                        server.addNewDistributionAbonent(values.email);
                        alert('Вы успешно подписаны на рассылку.');
                    }}
                >
                    {({errors, touched}) => (
                        <Form>
                            <div className={classes.content__form}>
                                <Field className={classes.textForm} validate={emailValidator} id="email" name="email"
                                       placeholder="Email"/>
                                <button type='submit' className={classes.submit__btn}>Отправить</button>
                            </div>
                            {touched.email && errors.email &&
                                <div className={classes.error}>
                                    {errors.email}
                                </div>
                            }
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    </div>
}

export default Footer;