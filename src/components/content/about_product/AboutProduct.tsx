import React, {useState} from 'react';
import classes from "./AboutProduct.module.css";
import ProductReviewsComponent from "./product_reviews/ProductReviewsComponent";
import {ProductReviews, server} from "../../../store/Server";
import {useParams} from "react-router-dom";


const AboutProduct = (props:any) => {
    const {id} = useParams();
    console.log(id);
    const [reviews, setReviews] = useState<ProductReviews>(server.getProductReviews(Number(id)));
    return (
        <div className={classes.container}>
            <ProductReviewsComponent
                setReviews = {setReviews}
                reviews = {reviews.reviews}
            />
        </div>
    )
}
export {AboutProduct};