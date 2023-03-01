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


const AdminPanel = () => {
    return (
        <div className={classes.container}>
            <div>
                Создать новый продукт в каталоге
                <Formik
                    initialValues={{
                        title: '',
                        image: '',
                        desc: '',
                        cost: 0,
                    }}
                    onSubmit={(values) => {
                        server.addNewProductToCatalog(values.image, values.title, values.desc, values.cost);
                        alert('Товар успешно добавлен.');
                    }}
                >
                    {({errors, touched}) => (
                        <Form>
                            <Field validate={rangeStringLengthValidator(2, 20)} id="title" name="title"
                                   placeholder="Введите название товара"/>
                            {touched.title && errors.title &&
                                <div>
                                    {errors.title}
                                </div>
                            }

                            <Field validate={rangeStringLengthValidator(2, 300)} id="image" name="image"
                                   placeholder="Введите url картинки товара"/>
                            {touched.image && errors.image &&
                                <div>
                                    {errors.image}
                                </div>
                            }
                            <Field validate={rangeStringLengthValidator(2, 20)} id="desc" name="desc"
                                   placeholder="Введите описание товара"/>
                            {touched.desc && errors.desc &&
                                <div>
                                    {errors.desc}
                                </div>
                            }
                            <Field validate={rangeNumberValidator(10, 20000)} id="cost" name="cost" type='number'
                                   placeholder="Введите цену товара"/>
                            {touched.cost && errors.cost &&
                                <div>
                                    {errors.cost}
                                </div>
                            }
                            <button type="submit">Добавить товар</button>
                        </Form>
                    )}
                </Formik>
            </div>
            <div>
                Удалить продукт в каталоге
            </div>
            <div>
                Изменить продукт в каталоге
            </div>
        </div>
    )
}
export default AdminPanel;