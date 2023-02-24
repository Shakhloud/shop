import React from 'react';
import classes from "./ProductItemContent.module.css";

const ProductItemContent = (props: any) => {
    return (
        <div className={classes.container}>
            <div className={classes.image}><img src={props.image} alt="Фотография товара"/></div>
            <div className={classes.title}>
                {props.title}
            </div>
            <div className={classes.desc}>
                {props.desc}
            </div>
            <div className={classes.cost}>
                {props.cost}$
            </div>
        </div>
    )
}

export default ProductItemContent;