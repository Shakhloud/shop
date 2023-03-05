import React from 'react';
import classes from "./ShopReviews.module.css";
import bg_reviews from './../../../img/content/shop_reviews/bg_reviews.png'


const ShopReviews = () => {
    return (
        <div className={classes.container}>
            <div className={classes.title}>От<span className={classes.title_yellow}>зы</span>вы <span
                className={classes.title_under}>Только посмотри что о нас говорит<br/>твоя соседка</span></div>
            <div className={classes.shop__reviews}>
                <img src={bg_reviews} alt="фоновый телефон"/>
            </div>
        </div>
    )
}
export default ShopReviews;