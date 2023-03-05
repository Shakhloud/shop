import React from 'react';
import classes from "./ProductItemContent.module.css";
import {NavLink, useNavigate, useParams} from "react-router-dom";

const ProductItemContent = (props: any) => {
    const navigate = useNavigate();

    const addItemHandler = () => {
        if (!props.login) return;
        props.addItem(props.login, props.productId, null, null, null);
        props.updateBasket();
    }

    const aboutItemHandler = () => {
        navigate('/about_product/' + props.productId);
    }



    return (
        <div className={classes.container}>
            <div className={props.imageStyle + ' ' + classes.image}>
                <div className={classes.bgImg}></div>
                <div className={classes.image__btns}>
                    <button onClick={addItemHandler} className={classes.btnItem}>Добавить в корзину</button>
                        <button onClick={aboutItemHandler} className={classes.btnItem}>Подробнее</button>
                </div>
                <img className={classes.productImg} src={props.image} alt="Фотография товара"/></div>
            <div className={classes.title}>
                {props.title}
            </div>
            <div className={classes.cost}>
                {props.cost}$
            </div>
        </div>
    )
}

export default ProductItemContent;