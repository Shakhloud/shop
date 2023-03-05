import React, {useState} from 'react';
import {server} from '../../../../store/Server';
import classes from "./ProductDescription.module.css";
import {Select} from "antd";
import {authService} from "../../../../store/Auth";
import {basketService} from "../../../../store/Basket";
import {NavLink} from 'react-router-dom';


const ProductDescription = (props: any) => {
    const product = server.getCurrentItem(Number(props.productId));
    const [size, setSize] = useState('S');
    const [color, setColor] = useState('Белый');
    const [count, setCount] = useState(1);
    const sizeHandler = (e: any) => {
        setSize(e);
    }
    const colorHandler = (e: any) => {
        setColor(e);
    }

    const countPlusHandler = () => {
        setCount(count + 1);
    }

    const countMinusHandler = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const buyHandler = () => {
        debugger
        if (!props.login) return;
        props.addItem(props.login, Number(props.productId), size, color, count);
        props.updateBasket();
    }
    const checkPath = server.checkPath(Number(props.productId));

    return (
        <div className={classes.container}>
            <div className={classes.navigation}>
                {(checkPath===1) && <NavLink className={classes.link} to='/catalog'>
                    каталог
                </NavLink>}
                {(checkPath===2) && <NavLink className={classes.link} to='/top_sell'>
                    топ продажи
                </NavLink>}
                &nbsp;/ <span
                className={classes.navigation_yellow}>
                {product.title}
                </span>
            </div>
            <div className={classes.product__container}>
                <div className={classes.product__image}>
                    <img src={product.image} alt="фото товара"/>
                </div>
                <div className={classes.product__info}>
                    <div className={classes.product__title}>
                        {product.title}
                    </div>
                    <div className={classes.product__cost}>
                        Цена: <span>{product.cost * count} $</span>
                    </div>
                    <div className={classes.product__characters}>
                        <div className={classes.product__attribute}>
                            <div>Размер:</div>
                            <Select
                                popupClassName={classes.formDropdown}
                                className={classes.attribute + ' ' + classes.attribute_size}
                                onChange={sizeHandler}
                                value={size}
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
                        </div>
                        <div className={classes.product__attribute}>
                            <div>Цвет:</div>
                            <Select
                                popupClassName={classes.formDropdown}
                                className={classes.attribute + ' ' + classes.attribute_color}
                                value={color}
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
                        </div>
                        <div className={classes.product__attribute}>
                            <div>Количество:</div>
                            <span className={classes.countBtn}>
                            <button onClick={countMinusHandler}>-</button>
                            <div>{count}</div>
                            <button onClick={countPlusHandler}>+</button>
                        </span>
                        </div>
                    </div>
                    <div className={classes.product__btn}>
                        <button onClick={buyHandler}>Купить</button>
                    </div>
                </div>
            </div>
            <div className={classes.desc__title}>Описание</div>
            <div className={classes.desc__content}>{product.desc}</div>
        </div>
    )
}
export default ProductDescription;