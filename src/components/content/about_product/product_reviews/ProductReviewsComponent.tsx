import React, {useState} from 'react';
import classes from "./ProductReviewsComponent.module.css";
import ProductReviewsContent from "./product_reviews_content/ProductReviewsContent";
import {server, Review} from "../../../../store/Server";
import {Field, Form, Formik} from "formik";
import {
    rangeStringLengthValidator,
    ratingValidator,
} from "../../../../utils/FormikValidators";
import close from './../../../../img/content/about/close.png';

const ProductReviewsComponent = (props: any) => {
    const [modalWindowReview, setModalWindowReview] = useState(false);
    const addNewReviewHandler = () => {
        setModalWindowReview(true);
    }
    const closeModalWindowHandler = () => {
        setModalWindowReview(false);
    }
    if (modalWindowReview) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    }

    return (
        <div className={classes.container}>
            {(modalWindowReview) && <div className={classes.modal__bg}>
                <div className={classes.modal__content}>
                    <Formik
                        initialValues={{
                            content: '',
                            rating: '',
                        }}
                        onSubmit={(values) => {
                            server.addNewReview(Number(props.productId), values.content, Number(values.rating));
                            props.setReviews(server.getProductReviews(Number(props.productId)));
                            setModalWindowReview(false);
                            alert('Ваш отзыв успешно оставлен.');
                        }}
                    >
                        {({errors, touched}) => (
                            <Form>
                                <div className={classes.modal__content}>
                                    <div className={classes.forms}>
                                        <button onClick={closeModalWindowHandler} className={classes.modal__close}><img
                                            src={close} alt="закрывающая кнопка"/></button>
                                        <div className={classes.modal__title}>Оставить отзыв</div>
                                        <Field as="textarea"
                                               className={classes.modal__textForm + ' ' + classes.modal__textForm_textarea}
                                               validate={rangeStringLengthValidator(5, 200,true)}
                                               id="content" name="content"
                                               placeholder="Введите текст отзыва."
                                        />
                                        {touched.content && errors.content &&
                                            <div className={classes.error}>
                                                {errors.content}
                                            </div>
                                        }

                                        <Field
                                            className={classes.modal__textForm}
                                            validate={ratingValidator}
                                            id="rating"
                                            name="rating"
                                            placeholder="1/2/3/4/5"
                                        />
                                        {touched.rating && errors.rating &&
                                            <div className={classes.error}>
                                                {errors.rating}
                                            </div>
                                        }
                                        <button type="submit" className={classes.submit__btn}>Оставить отзыв</button>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>}
            <div className={(modalWindowReview ? 'classes.disable' : '')}>
                <div className={classes.title}>
                    Отзывы
                    <button onClick={addNewReviewHandler} className={classes.reviews__btn}>Оставить отзыв</button>
                </div>
                <div className={classes.reviews}>
                    {props.reviews.length === 0 &&
                    <div className={classes.notReviews}>
                        К сожалению на данный момент на товар нет отзывов.
                    </div>}
                    {props.reviews.map((item: Review, index: number) => <div key={index} className={classes.review}>
                        <ProductReviewsContent

                            image={item.avatar}
                            name={item.name}
                            content={item.content}
                            rating={item.rating}
                        /></div>)}
                </div>
            </div>
        </div>
    )
}
export default ProductReviewsComponent;