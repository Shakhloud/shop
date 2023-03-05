import React from 'react';
import classes from "./CallUs.module.css";
import {Field, Form, Formik} from "formik";
import {emailValidator, rangeStringLengthValidator, telephoneValidator} from "../../../utils/FormikValidators";
import telegram from './../../../img/content/callus/telegram.png';
import whatsapp from './../../../img/content/callus/whatsapp.png';
import grafik from './../../../img/content/callus/grafik.png';
import map from './../../../img/content/callus/map.png';
import contact from './../../../img/content/callus/contact.png';
import { server } from '../../../store/Server';


const CallUs = () => {

    return (
        <div className={classes.container}>
            <div className={classes.title}>
                Свяжитесь с <span className={classes.title_yellow}>нами</span>
                <span className={classes.title_under}>Это быстро и удобно</span>
            </div>
            <div className={classes.top__content}>
                <Formik
                    initialValues={{
                        name:  '',
                        email: '',
                        phone:  '',
                        comment: '',
                    }}
                    onSubmit={(values) => {
                        server.addNewAbonentForCall (values.name,values.email,values.phone,values.comment);
                        alert('Запрос на телефонный звонок был отправлен.');
                    }}
                >
                    {({errors, touched}) => (
                        <Form>
                            <div className={classes.content__form}>
                                <Field className={classes.textForm} validate={rangeStringLengthValidator(2, 10, true)}
                                       id="name" name="name"
                                       placeholder="Ваше имя"/>
                                {touched.name && errors.name &&
                                    <div className={classes.error}>
                                        {errors.name}
                                    </div>
                                }

                                <Field className={classes.textForm} validate={emailValidator} id="email" name="email"
                                       placeholder="Email"/>
                                {touched.email && errors.email &&
                                    <div className={classes.error}>
                                        {errors.email}
                                    </div>
                                }
                                <Field
                                    className={classes.textForm}
                                    validate={telephoneValidator}
                                    id="phone"
                                    name="phone"
                                    placeholder="Телефон"
                                />
                                {touched.phone && errors.phone &&
                                    <div className={classes.error}>
                                        {errors.phone}
                                    </div>
                                }
                                <Field
                                    className={classes.textForm}
                                    validate={rangeStringLengthValidator(4, 30, false)}
                                    id="comment"
                                    name="comment"
                                    placeholder="Примечание"
                                />
                                {touched.comment && errors.comment &&
                                    <div className={classes.error}>
                                        {errors.comment}
                                    </div>
                                }
                                <button type='submit' className={classes.submit__btn}>Отправить</button>
                            </div>
                        </Form>
                    )}
                </Formik>
                <div className={classes.links}>
                    <a href="#"><img src={telegram} alt="иконка telegram"/></a>
                    <a href="#"><img src={whatsapp} alt="иконка whats app"/></a>
                </div>
                <div className={classes.map}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1798.2224983474882!2d-74.01081853827746!3d40.712783389377705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a191cac2c15%3A0x7f33d7e5a45131b9!2z0JLRgdC10LzQuNGA0L3Ri9C5INGC0L7RgNCz0L7QstGL0Lkg0YbQtdC90YLRgA!5e0!3m2!1sru!2sru!4v1677990362129!5m2!1sru!2sru"
                        width="600" height="450" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className={classes.bottom__content}>
                <div className={classes.card}>
                    <img src={grafik} alt="График"/>
                    <div className={classes.card__title}>График</div>
                    <div className={classes.card__info}>ПН-ПТ:<br/>9:00 - 18:00</div>
                </div>
                <div className={classes.card}>
                    <img src={map} alt="Карта"/>
                    <div className={classes.card__title}>Карта</div>
                    <div className={classes.card__info}>г. Киев<br/>ул. Название</div>
                </div>
                <div className={classes.card}>
                    <img src={contact} alt="Контакты"/>
                    <div className={classes.card__title}>Контакты</div>
                    <div className={classes.card__info}>+38(099)-999-99-99<br/>gmailexamp@gmail.com</div>
                </div>
            </div>
        </div>
    )
}
export default CallUs;