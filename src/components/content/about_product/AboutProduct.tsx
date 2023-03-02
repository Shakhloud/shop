import React, {useState} from 'react';
import classes from "./AboutProduct.module.css";
import ProductReviewsComponent from "./product_reviews/ProductReviewsComponent";
import {ProductReviews, server} from "../../../store/Server";


const AboutProduct = (props:any) => {
    const [reviews, setReviews] = useState<ProductReviews>(server.getProductReviews(props.productId));

    return (
        <div className={classes.container}>
            <ProductReviewsComponent
                setReviews = {setReviews}
                reviews = {reviews.reviews}
            />
        </div>
    )
}
export default AboutProduct;