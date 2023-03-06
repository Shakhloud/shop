import React from 'react';
import classes from "./Main.module.css";
import ProductSlider from "./product_slider/ProductSlider";
import {server} from "../../store/Server";
import ProductPagination from "./product_pagination/ProductPagination";
import {Routes, Route} from "react-router-dom";
import BasketContent from "./basket/basket_content/BasketContent";
import AdminPanel from "./admin_panel/AdminPanel";
import {AboutProduct} from "./about_product/AboutProduct";
import NoPageFound from "./no_page_found/NoPageFound";
import CallUs from './call_us/CallUs';
import MainPage from './main/MainPage';
import TopSell from "./top_sell/TopSell";
import ShopReviews from "./shop_reviews/ShopReviews";
import bg from './../../img/content/shop_reviews/bg.png'

const Main = () => {
    return (
        <div className={classes.main}>
            <div className={classes.container}>
                <Routes>
                    <Route path='/about_product/:id' element={<AboutProduct/>}/>
                    <Route path='/top_sell' element={<TopSell/>}/>
                    <Route path='/catalog' element={<ProductPagination getPageData={server.getPageData}/>}/>
                    <Route path='/admin_panel' element={<AdminPanel/>}/>
                    <Route path='/basket' element={<BasketContent/>}/>
                    <Route path='/call_us' element={<CallUs/>}/>
                    <Route path='/reviews' element={<ShopReviews/>}/>
                    <Route path='/auth' element={''}/>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path="*" element={<NoPageFound/>}/>

                </Routes>
            </div>
        </div>
    )
}
export default Main;