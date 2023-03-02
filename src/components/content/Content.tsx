import React from 'react';
import classes from "./Content.module.css";
import ProductSlider from "./product_slider/ProductSlider";
import {server} from "../../store/Server";
import ProductPagination from "./product_pagination/ProductPagination";
import {BrowserRouter, Routes, Route, useParams, useSearchParams} from "react-router-dom";
import BasketContent from "./basket/basket_content/BasketContent";
import AdminPanel from "../admin_panel/AdminPanel";
import AboutProduct from "./about_product/AboutProduct";


const Content = () => {
    return (
        <div className={classes.main}>
            <div className={classes.container}>
                {/* <ProductSlider products={server.getStore().sliderProducts}/>*/}
                <Routes>
                    <Route path='/about_product/:id' element={<AboutProduct/>}/>
                    <Route path='/top_sell' element={<ProductSlider products={server.getStore().sliderProducts}/>}/>
                    <Route path='/catalog' element={<ProductPagination getPageData={server.getPageData}/>}/>
                    <Route path='/admin_panel' element={<AdminPanel />}/>
                    <Route path='/basket' element={<BasketContent/>}/>
                    <Route path='/' element={''}/>
                </Routes>
            </div>
        </div>
    )
}
export default Content;