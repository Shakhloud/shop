import React, {useState} from 'react';
import classes from "./ShopReviews.module.css";
import right_arrow from "./../../../img/content/shop_reviews/right.svg";
import left_arrow from "./../../../img/content/shop_reviews/left.svg";
import ShopReviewsElement from "./shop_reviews_element/ShopReviewsElement";
import {server} from "../../../store/Server";

const ShopReviews = () => {
    const [currentIndex, setIndex] = useState(0);
    const shopReviews = server.getShopReviews();
    let plusForIndex = 1;
    const nextItemHandler = () => {
        if ((currentIndex + plusForIndex) === shopReviews.reviews.length) {
            setIndex(0);
        } else {
            setIndex(currentIndex + plusForIndex);
        }
    }
    const prevItemHandler = () => {
        if (currentIndex === 0) {
            setIndex(shopReviews.reviews.length - (shopReviews.reviews.length % 3));
        } else {
            setIndex(currentIndex - 3);
        }
    }
    return (
        <div className={classes.container}>
            <div className={classes.title}>От<span className={classes.title_yellow}>зы</span>вы <span
                className={classes.title_under}>Только посмотри что о нас говорит<br/>твоя соседка</span></div>
            <div className={classes.shop__reviews}>
                <div className={classes.content}>
                    <button className={classes.btn} onClick={prevItemHandler}><img src={left_arrow}
                                                                                   alt="Стрелка влево"/></button>
                    <div className={classes.content__reviews}>
                        {(plusForIndex = 1) && <div>
                            <ShopReviewsElement
                                avatar={shopReviews.reviews[currentIndex].avatar}
                                name={shopReviews.reviews[currentIndex].name}
                                rating={shopReviews.reviews[currentIndex].rating}
                                content={shopReviews.reviews[currentIndex].content}
                            />
                        </div>}
                        {shopReviews.reviews.length > currentIndex + 1 && plusForIndex++ && <div>
                            <ShopReviewsElement
                                avatar={shopReviews.reviews[currentIndex + 1].avatar}
                                name={shopReviews.reviews[currentIndex + 1].name}
                                rating={shopReviews.reviews[currentIndex + 1].rating}
                                content={shopReviews.reviews[currentIndex + 1].content}
                            />
                        </div>
                        }
                        {shopReviews.reviews.length > currentIndex + 2 && plusForIndex++ && <div>
                            <ShopReviewsElement
                                avatar={shopReviews.reviews[currentIndex + 2].avatar}
                                name={shopReviews.reviews[currentIndex + 2].name}
                                rating={shopReviews.reviews[currentIndex + 2].rating}
                                content={shopReviews.reviews[currentIndex + 2].content}
                            />
                        </div>
                        }
                    </div>
                    <button className={classes.btn} onClick={nextItemHandler}><img src={right_arrow}
                                                                                   alt="Стрелка вправо"/></button>
                </div>
            </div>
        </div>
    )
}
export default ShopReviews;