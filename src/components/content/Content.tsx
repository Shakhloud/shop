import React from 'react';
import classes from "./Content.module.css";
import ProductSlider from "./product_slider/ProductSlider";
import {server} from "../../store/Server";
import ProductPagination from "./product_pagination/ProductPagination";


const Content = () => {

    return <div className={classes.main}>
        <div className={classes.container}>
            {/* <ProductSlider products={server.getStore().sliderProducts}/>*/}
            <ProductPagination getPageData={server.getPageData}/>
        </div>
    </div>
}

export default Content;