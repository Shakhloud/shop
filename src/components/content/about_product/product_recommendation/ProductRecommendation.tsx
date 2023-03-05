import React, {useState} from 'react';
import classes from "./ProductRecommendation.module.css";
import ProductItemContent from "../../product_item_content/ProductItemContent";
import {server} from "../../../../store/Server";
import {basketService} from "../../../../store/Basket";
import {authService} from "../../../../store/Auth";


const ProductRecommendation = (props: any) => {
    return (
        <div className={classes.container}>
            <div className={classes.title}>Рекомендуем вам</div>
            <div className={classes.recommendProducts}>
                <ProductItemContent
                    imageStyle={'imageStyleRecommend'}
                    addItem={server.addBasketItem.bind(server)}
                    updateBasket={basketService.update.bind(basketService)}
                    login={authService.getLogin()}
                    productId={props.rndIndex1}
                    image={server.getCurrentItem(props.rndIndex1).image}
                    title={server.getCurrentItem(props.rndIndex1).title}
                    desc={server.getCurrentItem(props.rndIndex1).desc}
                    cost={server.getCurrentItem(props.rndIndex1).cost}
                />
                <ProductItemContent
                    imageStyle={'imageStyleRecommend'}
                    addItem={server.addBasketItem.bind(server)}
                    updateBasket={basketService.update.bind(basketService)}
                    login={authService.getLogin()}
                    productId={props.rndIndex2}
                    image={server.getCurrentItem(props.rndIndex2).image}
                    title={server.getCurrentItem(props.rndIndex2).title}
                    desc={server.getCurrentItem(props.rndIndex2).desc}
                    cost={server.getCurrentItem(props.rndIndex2).cost}
                />
                <ProductItemContent
                    imageStyle={'imageStyleRecommend'}
                    addItem={server.addBasketItem.bind(server)}
                    updateBasket={basketService.update.bind(basketService)}
                    login={authService.getLogin()}
                    productId={props.rndIndex3}
                    image={server.getCurrentItem(props.rndIndex3).image}
                    title={server.getCurrentItem(props.rndIndex3).title}
                    desc={server.getCurrentItem(props.rndIndex3).desc}
                    cost={server.getCurrentItem(props.rndIndex3).cost}
                /><ProductItemContent
                imageStyle={'imageStyleRecommend'}
                addItem={server.addBasketItem.bind(server)}
                updateBasket={basketService.update.bind(basketService)}
                login={authService.getLogin()}
                productId={props.rndIndex4}
                image={server.getCurrentItem(props.rndIndex4).image}
                title={server.getCurrentItem(props.rndIndex4).title}
                desc={server.getCurrentItem(props.rndIndex4).desc}
                cost={server.getCurrentItem(props.rndIndex4).cost}
            />

            </div>
        </div>
    )
}
export default ProductRecommendation;