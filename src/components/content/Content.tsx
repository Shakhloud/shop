import React from 'react';
import classes from "./Content.module.css";
import ProductSlider from "./product_slider/ProductSlider";
import {ServerData} from "../../store/ServerData";

const Content = () => {

    return <div className={classes.main}>
        <div className={classes.container}>
            <ProductSlider products={ServerData.clothes}/>
        </div>
    </div>
}

export default Content;