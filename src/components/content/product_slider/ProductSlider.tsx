import React, {useState} from 'react';
import classes from "./ProductSlider.module.css";
import arrowRight from "./../../../img/content/product_slider/arrow-right.svg";
import arrowLeft from "./../../../img/content/product_slider/arrow-left.svg";
import ProductItemContent from "../product_item_content/ProductItemContent";
import {authService} from "../../../store/Auth";
import {basketService} from "../../../store/Basket";
import {server} from "../../../store/Server";

const ProductSlider = (props: any) => {
    const [currentIndex, setIndex] = useState(0);
    const products = props.products;
    let plusForIndex = 1;
    const nextItemHandler = () => {
        if ((currentIndex + plusForIndex) === products.length) {
            setIndex(0);
        } else {
            setIndex(currentIndex + plusForIndex);
        }
    }
    const prevItemHandler = () => {
        if (currentIndex === 0) {
            setIndex(products.length - (products.length % 4));
        } else {
            setIndex(currentIndex - 4);
        }
    }

    return <div>
        <div className={classes.fcontainer}>
            <button onClick={prevItemHandler} className={classes.btn}>
                <img src={arrowLeft} alt="Стрелка влево"/>
            </button>
            <div className={classes.content}>
                {(plusForIndex = 1) && <ProductItemContent
                    imageStyle={'imageStyleSlider'}
                    addItem={server.addBasketItem.bind(server)}
                    updateBasket={basketService.update.bind(basketService)}
                    login={authService.getLogin()}
                    productId={products[currentIndex].id}
                    image={products[currentIndex].image}
                    title={products[currentIndex].title}
                    desc={products[currentIndex].desc}
                    cost={products[currentIndex].cost}/>}

                {(currentIndex + 1 < products.length) && plusForIndex++ && <ProductItemContent
                    imageStyle={'imageStyleSlider'}
                    addItem={server.addBasketItem.bind(server)}
                    updateBasket={basketService.update.bind(basketService)}
                    login={authService.getLogin()}
                    productId={products[currentIndex + 1].id}
                    image={products[currentIndex + 1].image}
                    title={products[currentIndex + 1].title}
                    desc={products[currentIndex + 1].desc}
                    cost={products[currentIndex + 1].cost}/>
                }
                {(currentIndex + 2 < products.length) && plusForIndex++ && <ProductItemContent
                    imageStyle={'imageStyleSlider'}
                    addItem={server.addBasketItem.bind(server)}
                    updateBasket={basketService.update.bind(basketService)}
                    login={authService.getLogin()}
                    productId={products[currentIndex + 2].id}
                    image={products[currentIndex + 2].image}
                    title={products[currentIndex + 2].title}
                    desc={products[currentIndex + 2].desc}
                    cost={products[currentIndex + 2].cost}/>
                }
                {(currentIndex + 3 < products.length) && plusForIndex++ && <ProductItemContent
                    imageStyle={'imageStyleSlider'}
                    addItem={server.addBasketItem.bind(server)}
                    updateBasket={basketService.update.bind(basketService)}
                    login={authService.getLogin()}
                    productId={products[currentIndex + 3].id}
                    image={products[currentIndex + 3].image}
                    title={products[currentIndex + 3].title}
                    desc={products[currentIndex + 3].desc}
                    cost={products[currentIndex + 3].cost}/>
                }
            </div>
            <button onClick={nextItemHandler} className={classes.btn}>
                <img src={arrowRight} alt="Стрелка вправо"/>
            </button>
        </div>
    </div>
}


export default ProductSlider;