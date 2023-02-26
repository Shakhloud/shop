import React from 'react';
import classes from "./BasketContent.module.css";
import BasketContentItem from "./basket_content_item/BasketContentItem";
import {basketService} from "../../../../store/Basket";

const BasketContent = (props: any) => {
    const basket = basketService.getBasket();
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                Корзина
            </div>
            <div className={classes.basketItemContent}>
                {
                    basket?.items.map(item => <BasketContentItem
                        image={item.product.image}
                        title={item.product.title}
                        size={item.size}
                        color={item.color}
                        count={item.count}
                        commonCost={item.commonCost}/>)
                }
            </div>
        </div>
    )
}

export default BasketContent;