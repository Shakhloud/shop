import React from 'react';
import classes from "./AdminPanel.module.css";
import {server} from "../../store/Server";
import {Form, Formik, Field} from "formik";
import {
    emailValidator,
    rangeNumberValidator,
    rangeStringLengthValidator,
    telephoneValidator
} from "../../utils/FormikValidators";
import {basketService} from "../../store/Basket";


const AdminPanel = () => {
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                Панель администратора
            </div>
            <div className={classes.functions}>
                <div className={classes.panel}>
                    <span>Создать новый продукт в каталоге</span>
                    <Formik
                        initialValues={{
                            title: '',
                            image: '',
                            desc: '',
                            cost: '',
                        }}
                        onSubmit={(values) => {
                            server.addNewProductToCatalog(values.image, values.title, values.desc, Number(values.cost));
                            alert('Товар успешно добавлен.');
                        }}
                    >
                        {({errors, touched}) => (
                            <Form>
                                <div className={classes.forms}>
                                    <Field className={classes.textForm} validate={rangeStringLengthValidator(2, 20)}
                                           id="title" name="title"
                                           placeholder="Введите название товара"/>
                                    {touched.title && errors.title &&
                                        <div className={classes.error}>
                                            {errors.title}
                                        </div>
                                    }
                                    <Field className={classes.textForm} validate={rangeStringLengthValidator(2, 300)}
                                           id="image" name="image"
                                           placeholder="Введите url картинки товара"/>
                                    {touched.image && errors.image &&
                                        <div className={classes.error}>
                                            {errors.image}
                                        </div>
                                    }
                                    <Field className={classes.textForm} validate={rangeStringLengthValidator(2, 20)}
                                           id="desc" name="desc"
                                           placeholder="Введите описание товара"/>
                                    {touched.desc && errors.desc &&
                                        <div className={classes.error}>
                                            {errors.desc}
                                        </div>
                                    }
                                    <Field className={classes.textForm} validate={rangeNumberValidator(10, 20000)}
                                           id="cost"
                                           name="cost" type='number'
                                           placeholder="Введите стоимость товара"/>
                                    {touched.cost && errors.cost &&
                                        <div className={classes.error}>
                                            {errors.cost}
                                        </div>
                                    }
                                    <button className={classes.submit__btn} type="submit">Добавить товар</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className={classes.panel}>
                    <span>Изменить продукт в каталоге</span>
                    <Formik
                        initialValues={{
                            productId: '',
                            title: '',
                            image: '',
                            desc: '',
                            cost: '',
                        }}
                        onSubmit={(values) => {
                            server.changeProductFromCatalog(Number(values.productId), values.title, values.image, values.desc, Number(values.cost));
                            basketService.update();
                            alert('Товар успешно обновлен.');
                        }}
                    >
                        {({errors, touched}) => (
                            <Form>
                                <div className={classes.forms}>
                                    <Field className={classes.textForm} type="number"
                                           id="productId" name="productId"
                                           placeholder="Введите ID товара"/>
                                    {touched.productId && errors.productId &&
                                        <div className={classes.error}>
                                            {errors.productId}
                                        </div>
                                    }
                                    <div className={classes.forms}>
                                        <Field className={classes.textForm}
                                               id="title" name="title"
                                               placeholder="Введите название товара"/>
                                        <Field className={classes.textForm}
                                               id="image" name="image"
                                               placeholder="Введите url картинки товара"/>
                                        <Field className={classes.textForm}
                                               id="desc" name="desc"
                                               placeholder="Введите описание товара"/>
                                        <Field className={classes.textForm}
                                               id="cost"
                                               name="cost" type='number'
                                               placeholder="Введите стоимость товара"/>
                                        <button className={classes.submit__btn} type="submit">Обновить товар</button>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className={classes.panel}>
                    <span>Удалить продукт в каталоге</span>
                    <Formik
                        initialValues={{
                            productId: '',
                        }}
                        onSubmit={(values) => {
                            server.deleteProductFromCatalog(Number(values.productId));
                            alert('Товар успешно удален.');
                        }}
                    >
                        {({errors, touched}) => (
                            <Form>
                                <div className={classes.forms}>
                                    <Field className={classes.textForm} type="number"
                                           id="productId" name="productId"
                                           placeholder="Введите ID товара"/>
                                    {touched.productId && errors.productId &&
                                        <div className={classes.error}>
                                            {errors.productId}
                                        </div>
                                    }
                                    <button className={classes.submit__btn} type="submit">Удалить товар</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}
export default AdminPanel;