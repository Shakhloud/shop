import React, {useEffect, useState} from 'react';
import classes from "./AboutProduct.module.css";
import ProductReviewsComponent from "./product_reviews/ProductReviewsComponent";
import {ProductReviews, server} from "../../../store/Server";
import {useParams} from "react-router-dom";
import ProductRecommendation from "./product_recommendation/ProductRecommendation";
import ProductDescription from "./product_description/ProductDescription";
import {basketService} from "../../../store/Basket";
import {authService} from "../../../store/Auth";

const AboutProduct = (props: any) => {
    const {id} = useParams();
    const [reviews, setReviews] = useState<ProductReviews>(server.getProductReviews(Number(id)));

    useEffect(() => {
        setReviews(server.getProductReviews(Number(id)));
    }, [id]);

    function randIntExcep(min: number, max: number, exp: number) {
        let n;
        while (true) {
            if ((n = Math.floor(Math.random() * (max - min + 1)) + min) != exp)
                return n;
        }
    }

    const rndIndex1 = randIntExcep(0, server.getPaginationProducts().length - 1, Number(id));
    const rndIndex2 = randIntExcep(0, server.getPaginationProducts().length - 1, Number(id));
    const rndIndex3 = randIntExcep(0, server.getPaginationProducts().length - 1, Number(id));
    const rndIndex4 = randIntExcep(0, server.getPaginationProducts().length - 1, Number(id));

    return (
        <div className={classes.container}>
            <ProductDescription
                productId={Number(id)}
                updateBasket={basketService.update.bind(basketService)}
                addItem={server.addBasketItem.bind(server)}
                login={authService.getLogin()}
            />
            <ProductReviewsComponent
                setReviews={setReviews}
                productId={id}
                reviews={reviews.reviews}
            />
            <ProductRecommendation
                rndIndex1={rndIndex1}
                rndIndex2={rndIndex2}
                rndIndex3={rndIndex3}
                rndIndex4={rndIndex4}
            />
        </div>
    )
}
export {AboutProduct};