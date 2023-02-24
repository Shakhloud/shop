import React, {useState} from 'react';
import classes from "./ProductSlider.module.css";
import arrowRight from "./../../../img/content/product_slider/arrow-right.svg";
import arrowLeft from "./../../../img/content/product_slider/arrow-left.svg";
import ProductItemContent from "../product_item_content/ProductItemContent";

const ProductSlider = (props: any) => {
    const [currentIndex, setIndex] = useState(0);
    const products = props.products;

    const nextItemHandler = () => {
        if (currentIndex === products.length - 1) {
            setIndex(0);
        } else {
            setIndex(currentIndex + 1);
        }
    }
    const prevItemHandler = () => {
        if (currentIndex === 0) {
            setIndex(products.length - 1);
        } else {
            setIndex(currentIndex - 1);
        }
    }

    return <div>
        <div className={classes.fcontainer}>
            <button onClick={prevItemHandler} className={classes.btn}>
                <img src={arrowLeft} alt="Стрелка влево"/>
            </button>
            <ProductItemContent image={products[currentIndex].image} title={products[currentIndex].title}
                                desc={products[currentIndex].desc} cost={products[currentIndex].cost}/>
            <button onClick={nextItemHandler} className={classes.btn}>
                <img src={arrowRight} alt="Стрелка вправо"/>
            </button>
        </div>
    </div>
}


export default ProductSlider;