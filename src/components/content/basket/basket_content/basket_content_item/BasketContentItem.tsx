import React from 'react';
import classes from "./BasketContentItem.module.css";
import {Select, Input, Slider} from 'antd';
import productItemContent from "../../../product_item_content/ProductItemContent";
import deleteBtn from './../../../../../img/content/basket/deleteBtn.svg'

const BasketContentItem = (props: any) => {

    const sizeHandler = (e: any) => {
        props.setSize({size: e}, props.id)
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
                <button>-</button>
                {props.count}
                <button>+</button>
            </span>
            <span className={classes.commonCost}>
                {props.commonCost} $
            </span>
            <span className={classes.deleteBtn}>
                <button><img src={deleteBtn} alt="Иконка крестика"/></button>
            </span>
        </div>
    )
}

export default BasketContentItem;