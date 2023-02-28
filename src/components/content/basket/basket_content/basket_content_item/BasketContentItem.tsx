import React from 'react';
import classes from "./BasketContentItem.module.css";
import {Select, Input, Slider} from 'antd';
import productItemContent from "../../../product_item_content/ProductItemContent";
import deleteBtn from './../../../../../img/content/basket/deleteBtn.svg'
import {basketService, Color, FrontendBasketItem, Size} from "../../../../../store/Basket";
import {authService} from "../../../../../store/Auth";
import {server} from "../../../../../store/Server";
import {disabled} from "react-widgets/PropTypes";

const BasketContentItem = (props: any) => {

    const sizeHandler = (e: any) => {
        props.setSize({size: e}, props.id)
    }
    const colorHandler = (e: any) => {
        props.setColor({color: e}, props.id)
    }

    const countPlusHandler = () => {
        const newCount = props.count + 1;
        const newCommonCost = (props.commonCost / props.count) * newCount;
        setCount(newCount, props.id);
        setCommonCost(newCommonCost, props.id);
    }

    const countMinusHandler = () => {
        if (props.count > 1) {
            const newCount = props.count - 1;
            const newCommonCost = (props.commonCost / props.count) * newCount;
            setCount(newCount, props.id);
            setCommonCost(newCommonCost, props.id);
        }
    }

    const deleteItemHandler = () => {
        const login = authService.getLogin();
        if (!login) return;
        server.deleteBasketItem(login, props.id);
        basketService.update();
    }

    const setCount = (newCount: number, productId: number) => {
        const login = authService.getLogin();
        if (!login) return;
        server.changeCountOfItemInBasket(login, newCount, productId);
        basketService.update();
    }
    const setCommonCost = (newCommonCost: number, productId: number) => {
        const login = authService.getLogin();
        if (!login) return;
        server.changeCommonCostOfItemInBasket(login, newCommonCost, productId);
        basketService.update();
    }


    return (
        <div className={classes.container}>
            <img src={props.image} alt="Фотография товара."/>
            <span className={classes.title}>{props.title}</span>
            <Select
                dropdownClassName={classes.formDropdown}
                className={classes.size}
                onChange={sizeHandler}
                value={props.size}
                options={[
                    {
                        value: 'XL',
                        label: 'XL',
                    },
                    {
                        value: 'XXL',
                        label: 'XXL',
                    },
                    {
                        value: 'M',
                        label: 'M',
                    },
                    {
                        value: 'S',
                        label: 'S',
                    },
                ]}
            />
            <Select
                dropdownClassName={classes.formDropdown}
                className={classes.color}
                value={props.color}
                onChange={colorHandler}
                options={[
                    {
                        value: 'Серый',
                        label: 'Серый',
                    },
                    {
                        value: 'Черный',
                        label: 'Черный',
                    },
                    {
                        value: 'Белый',
                        label: 'Белый',
                    },
                    {
                        value: 'Желтый',
                        label: 'Желтый',
                    },
                    {
                        value: 'Голубой',
                        label: 'Голубой',
                    },
                ]}
            />
            <span className={classes.countBtn}>
                <button onClick={countMinusHandler}>-</button>
                {props.count}
                <button onClick={countPlusHandler}>+</button>
            </span>
            <span className={classes.commonCost}>
                {props.commonCost} $
            </span>
            <span onClick={deleteItemHandler} className={classes.deleteBtn}>
                <button><img src={deleteBtn} alt="Иконка крестика"/></button>
            </span>
        </div>
    )
}

export default BasketContentItem;