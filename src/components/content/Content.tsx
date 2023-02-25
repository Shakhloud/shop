import React from 'react';
import classes from "./Content.module.css";
import ProductSlider from "./product_slider/ProductSlider";
import {server} from "../../store/Server";
import ProductPagination from "./product_pagination/ProductPagination";
import {BrowserRouter, Routes, Route} from "react-router-dom";


const Content = () => {
    return (
            <div className={classes.main}>
                <div className={classes.container}>
                    {/* <ProductSlider products={server.getStore().sliderProducts}/>*/}
                    <Routes>
                        <Route path='/promotion' element={<ProductSlider products={server.getStore().sliderProducts}/>}/>
                        <Route path='/catalog' element={<ProductPagination getPageData={server.getPageData}/>}/>
                        <Route path='/' element={''}/>
                    </Routes>
                </div>
            </div>
    )
}
export default Content;