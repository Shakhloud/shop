import React, {useEffect, useState} from 'react';
import classes from "./ProductReviewsComponent.module.css";
import ProductReviewsContent from "./product_reviews_content/ProductReviewsContent";
import {server, ProductsReviews, ProductReviews,Review} from "../../../../store/Server";

const ProductReviewsComponent = (props:any) => {

    return (
        <div className={classes.container}>
                <div className={classes.title}>
                    Отзывы
                    <button className={classes.reviews__btn}>Оставить отзыв</button>
                </div>
                <div className={classes.reviews}>
                    {props.reviews.map((item:Review)=> <div className={classes.review}><ProductReviewsContent
                        image = {item.avatar}
                        name = {item.name}
                        content = {item.content}
                        rating = {item.rating}
                    /></div>)}
                </div>
        </div>
    )
}
export default ProductReviewsComponent;