import React from 'react';
import classes from "./TopSell.module.css";
import {server} from "../../../store/Server";
import ProductSlider from "../product_slider/ProductSlider";



const TopSell = () => {
    return (
        <div className={classes.container}>
            <div className={classes.title}>Топ про<span className={classes.title_yellow}>даж</span><span className={classes.title_under}>То, что вам понравиться</span></div>
            <ProductSlider products={server.getStore().sliderProducts}/>
        </div>
    )
}
export default TopSell;