import React from 'react';
import classes from "./BasketContentItem.module.css";
import {Select, Input, Slider} from 'antd';

const BasketContentItem = (props: any) => {

    const sizeHandler = (e:any) => {
        console.log(e);
    }

    return (
        <div className={classes.container}>
            <img src={props.image} alt="Фотография товара."/>
            <span>{props.title}</span>
            <Select
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
            <div className={classes.countBtn}>
                <button>-</button>
                {props.count}
                <button>+</button>
            </div>
            <div className={classes.commonCost}>
                {props.commonCost}
            </div>
            <div className={classes.deleteBtn}>
                <button>x</button>
            </div>
        </div>
    )
}

export default BasketContentItem;