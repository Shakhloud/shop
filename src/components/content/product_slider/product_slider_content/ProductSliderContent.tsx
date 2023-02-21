import React from 'react';
import classes from "./ProductSliderContent.module.css";

const ProductSliderContent = (props: any) => {
    return <div>
        <div><img src={props.image} alt="Фотография товара"/></div>
        <div>
            {props.title}
        </div>
        <div>
            {props.cost}$
        </div>
    </div>
}

export default ProductSliderContent;