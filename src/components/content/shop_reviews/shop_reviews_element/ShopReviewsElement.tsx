import React from 'react';
import classes from "./ShopReviewsElement.module.css";
import star from './../../../../img/content/about/star.svg'


const ShopReviewsElement = (props: any) => {
    return (
        <div className={classes.container}>
            {props.rating === 1 &&
                <div className={classes.itemContainer}>
                    <div className={classes.avatar}>
                        <img src={props.avatar} alt="аватар пользователя"/>
                    </div>
                    <div className={classes.name}>
                        {props.name}
                    </div>
                    <div className={classes.rating}>
                        <img src={star} alt="звезда"/>
                    </div>
                    <div className={classes.content}>
                        {props.content}
                    </div>
                </div>
            }
            {props.rating === 2 &&
                <div className={classes.itemContainer}>
                    <div className={classes.avatar}>
                        <img src={props.avatar} alt="аватар пользователя"/>
                    </div>
                    <div className={classes.name}>
                        {props.name}
                    </div>
                    <div className={classes.rating}>
                        <img src={star} alt="звезда"/>
                        <img src={star} alt="звезда"/>
                    </div>
                    <div className={classes.content}>
                        {props.content}
                    </div>
                </div>
            }
            {props.rating === 3 &&
                <div className={classes.itemContainer}>
                    <div className={classes.avatar}>
                        <img src={props.avatar} alt="аватар пользователя"/>
                    </div>
                    <div className={classes.name}>
                        {props.name}
                    </div>
                    <div className={classes.rating}>
                        <img src={star} alt="звезда"/>
                        <img src={star} alt="звезда"/>
                        <img src={star} alt="звезда"/>
                    </div>
                    <div className={classes.content}>
                        {props.content}
                    </div>
                </div>
            }
            {props.rating === 4 &&
                <div className={classes.itemContainer}>
                    <div className={classes.avatar}>
                        <img src={props.avatar} alt="аватар пользователя"/>
                    </div>
                    <div className={classes.name}>
                        {props.name}
                    </div>
                    <div className={classes.rating}>
                        <img src={star} alt="звезда"/>
                        <img src={star} alt="звезда"/>
                        <img src={star} alt="звезда"/>
                        <img src={star} alt="звезда"/>
                    </div>
                    <div className={classes.content}>
                        {props.content}
                    </div>
                </div>
            }
            {props.rating === 5 &&
                <div className={classes.itemContainer}>
                    <div className={classes.avatar}>
                        <img src={props.avatar} alt="аватар пользователя"/>
                    </div>
                    <div className={classes.name}>
                        {props.name}
                    </div>
                    <div className={classes.rating}>
                        <img src={star} alt="звезда"/>
                        <img src={star} alt="звезда"/>
                        <img src={star} alt="звезда"/>
                        <img src={star} alt="звезда"/>
                        <img src={star} alt="звезда"/>
                    </div>
                    <div className={classes.content}>
                        {props.content}
                    </div>
                </div>
            }
        </div>
    )
}
export default ShopReviewsElement;