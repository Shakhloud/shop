import React from 'react';
import classes from "./BasketOrder.module.css";
import {Formik, Form, Field} from "formik";
import {emailValidator, rangeStringLengthValidator, telephoneValidator} from '../../../../../utils/FormikValidators';
import {basketService} from '../../../../../store/Basket';

const BasketOrder = (props: any) => {
    const deliveryCost = 50;
    const resultCost = deliveryCost + props.totalCost;
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                Оформить заказ
            </div>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    city: '',
                    department: '',
                }}
                onSubmit={(values) => (basketService.getBasket()?.items.length === 0) ? alert('К сожалению ваша корзина пуста. Пожалуйста воспользуйтесь каталогом для поиска подходящих товаров.') : alert('Ваш заказ успешно оформлен.')}
            >
                {({errors, touched}) => (
                    <Form>
                        <div className={classes.content}>
                            <div className={classes.forms}>

                                <Field className={classes.textForm} validate={rangeStringLengthValidator(2, 10)}
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
                                    id="city"
                                    name="city"
                                    placeholder="Город"
                                />
                                <Field
                                    className={classes.textForm}
                                    id="department"
                                    name="department"
                                    placeholder="Отделение"
                                />
                            </div>
                            <div className={classes.otherInfo}>
                                <div className={classes.radio}>
                                    <div className={classes.radio_block}>
                                        <div className={classes.radio__title}>Доставка</div>
                                        <div className={classes.radioBtn}>
                                            <input className={classes.radio__btn} type="radio" id="delivery1"
                                                   name="deliveries" value="самовывоз" defaultChecked/>
                                            <label className={classes.radio__label}
                                                   htmlFor="delivery1">Самовывоз</label>
                                        </div>
                                        <div className={classes.radioBtn}>
                                            <input className={classes.radio__btn} type="radio" id="delivery2"
                                                   name="deliveries" value="новая почта"/>
                                            <label className={classes.radio__label} htmlFor="delivery2">Новая
                                                почта</label>
                                        </div>
                                    </div>
                                    <div className={classes.radio_block}>
                                        <div className={classes.radio__title}>Оплата</div>
                                        <div className={classes.radioBtn}>
                                            <input className={classes.radio__btn} type="radio" id="payment1"
                                                   name="payments" value="наложеный платёж"/>
                                            <label className={classes.radio__label} htmlFor="payment1">Наложеный
                                                платёж</label>
                                        </div>
                                        <div className={classes.radioBtn}>
                                            <input className={classes.radio__btn} type="radio" id="payment2"
                                                   name="payments" value="безналичный" defaultChecked/>
                                            <label className={classes.radio__label}
                                                   htmlFor="payment2">Безналичный</label>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.otherInfo__resultCostBlock}>
                                    Заказ: <span>{props.totalCost} $</span>
                                </div>
                                <div
                                    className={classes.otherInfo__resultCostBlock}>Доставка: <span>{deliveryCost} $</span>
                                </div>
                                <div className={classes.resultCost}>Итого: <span>{resultCost} $</span></div>
                                <button type="submit" className={classes.submit__btn}>Оформить заказ</button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
export default BasketOrder;