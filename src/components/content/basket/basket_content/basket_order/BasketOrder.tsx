import React from 'react';
import classes from "./BasketOrder.module.css";
import {Formik, Form, Field} from "formik";
import {emailValidator, rangeLengthValidator, telephoneValidator} from '../../../../../utils/FormikValidators';

const BasketOrder = (props:any) => {

    debugger
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                Оформить заказ
            </div>
            <div>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        phone: '',
                        city: '',
                        department: '',
                    }}
                    onSubmit={(values) => alert('Ваш заказ оформлен.')}
                >
                    {({errors, touched}) => (
                        <Form>
                            <Field validate={rangeLengthValidator(2, 10)} id="name" name="name" placeholder="Ваше имя"/>
                            {touched.name && errors.name &&
                                <div>
                                    {errors.name}
                                </div>
                            }

                            <Field validate={emailValidator} id="email" name="email" placeholder="Email"/>
                            {touched.email && errors.email &&
                                <div>
                                    {errors.email}
                                </div>
                            }
                            <Field
                                validate={telephoneValidator}
                                id="phone"
                                name="phone"
                                placeholder="Телефон"
                            />
                            {touched.phone && errors.phone &&
                                <div>
                                    {errors.phone}
                                </div>
                            }
                            <Field
                                id="city"
                                name="city"
                                placeholder="Город"
                            />
                            <Field
                                id="department"
                                name="department"
                                placeholder="Отделение"
                            />
                            <button type="submit">Оформить заказ</button>
                        </Form>
                    )}
                </Formik>
            </div>
            <div>
                <div>
                    <div>
                        <div>Доставка</div>
                        <input type="radio" id="delivery"
                               name="delivery" value="самовывоз"/>
                        <label htmlFor="delivery">Самовывоз</label>
                        <input type="radio" id="delivery"
                               name="delivery" value="новая почта"/>
                        <label htmlFor="delivery">Новая почта</label>
                    </div>
                    <div>
                        <div>Оплата</div>
                        <input type="radio" id="payment"
                               name="payment" value="наложеный платёж"/>
                        <label htmlFor="payment">Наложеный платёж</label>
                        <input type="radio" id="payment"
                               name="payment" value="безналичный"/>
                        <label htmlFor="payment">Безналичный</label>
                    </div>
                    <div>
                        Заказ: {props.totalCost} $
                    </div>
                    <div>Доставка: {} $</div>
                    <div>Итого: {}</div>

                </div>

            </div>
        </div>
    )
}
export default BasketOrder;