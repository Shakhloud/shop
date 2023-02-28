import React from 'react';
import classes from "./BasketContent.module.css";
import BasketContentItem from "./basket_content_item/BasketContentItem";
import {basketService, Size, Color} from "../../../../store/Basket";
import {observer} from "mobx-react";
import {server} from "../../../../store/Server";
import {authService} from "../../../../store/Auth";
import BasketOrder from "./basket_order/BasketOrder";

const BasketContent = observer((props: any) => {
        const basket = basketService.getBasket();
        const setSize = (size: Size, productId: number) => {
            const login = authService.getLogin();
            if (!login) return;
            server.changeSizeOfItemInBasket(login, size, productId);
            basketService.update();
        }
        const setColor = (color: Color, productId: number) => {
            const login = authService.getLogin();
            if (!login) return;
            server.changeColorOfItemInBasket(login, color, productId);
            basketService.update();
        }
        return (
            <div className={classes.container}>
                <div className={classes.title}>
                    Корзина
                </div>
                <div className={classes.basketItemContent}>
                        {
                            basket?.items.map(item => <div className={classes.item}><BasketContentItem
                                key={item.product.id}
                                product={item.product}
                                id={item.product.id}
                                image={item.product.image}
                                title={item.product.title}
                                size={item.size.size}
                                color={item.color.color}
                                count={item.count}
                                commonCost={item.commonCost}
                                setSize={setSize}
                                setColor={setColor}/></div>)
                        }
                </div>
                <div>
                    <BasketOrder />
                </div>
            </div>
        )
    }
)
export default BasketContent;