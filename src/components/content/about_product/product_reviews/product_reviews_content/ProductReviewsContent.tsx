import React from 'react';
import classes from "./ProductReviewsContent.module.css";
import star from './../../../../../img/content/about/star.svg';

const ProductReviewsContent = (props:any) => {
    return (
        <div className={classes.container}>
            <div className={classes.avatar}><img src={props.image} alt="аватар человека"/></div>
            <div className={classes.name}>{props.name}</div>
            <div className={classes.rating}>
                {
                    (props.rating === 5) && <div>
                        <img className={classes.star} src={star} alt="оценочная звезда"/>
                        <img className={classes.star} src={star} alt="оценочная звезда"/>
                        <img className={classes.star} src={star} alt="оценочная звезда"/>
                        <img className={classes.star} src={star} alt="оценочная звезда"/>
                        <img className={classes.star} src={star} alt="оценочная звезда"/>
                    </div>
                }
                {
                    (props.rating === 4) && <div>
                        <img className={classes.star} src={star} alt="оценочная звезда"/>
                        <img className={classes.star} src={star} alt="оценочная звезда"/>
                        <img className={classes.star} src={star} alt="оценочная звезда"/>
                        <img className={classes.star} src={star} alt="оценочная звезда"/>
                    </div>
                }
                {
                    (props.rating === 3) && <div>
                        <img className={classes.star} src={star} alt="оценочная звезда"/>
                        <img className={classes.star} src={star} alt="оценочная звезда"/>
                        <img className={classes.star} src={star} alt="оценочная звезда"/>
                    </div>
                }
                {
                    (props.rating === 2) && <div>
                        <img className={classes.star} src={star} alt="оценочная звезда"/>
                        <img className={classes.star} src={star} alt="оценочная звезда"/>
                    </div>
                }
                {
                    (props.rating === 1) && <div>
                        <img className={classes.star} src={star} alt="оценочная звезда"/>
                    </div>
                }
            </div>
            <div className={classes.content}>
                {props.content}
            </div>
        </div>
    )
}
export default ProductReviewsContent;