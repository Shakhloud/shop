import React from 'react';
import classes from "./ProductSliderContent.module.css";

const ProductSliderContent = (props: any) => {
    return <div>
        <div className={classes.image}><img src={props.image} alt="Фотография товара"/></div>
        <div className={classes.title}>
            {props.title}
        </div>
        <div className={classes.desc}>
            {props.desc}
        </div>
        <div className={classes.cost}>
           Cost: {props.cost}$
        </div>
    </div>
}

export default ProductSliderContent;