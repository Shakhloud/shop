import React, {useEffect, useState} from 'react';
import classes from "./ProductPagination.module.css";
import {Product} from "./../../../store/Server";
import ProductItemContent from "../product_item_content/ProductItemContent";
import PageSlider from "../page_slider/PageSlider";

const ProductPagination = (props: any) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentProducts, setCurrentProducts] = useState<Array<Product>>([]);
    const [maxPage, setMaxPage] = useState(0);
    const itemsOnOnePage = 8;
    useEffect(() => {
        const response = props.getPageData(currentPage, itemsOnOnePage);
        setMaxPage(response.maxPage);
        setCurrentProducts(response.data);
    }, [currentPage]);

    return <div>
        <div className={classes.header}>
            <div className={classes.title}><span>Дж</span>инсы <span className={classes.title__under}>Любые размеры и формы</span>
            </div>
            <div className={classes.sort}>Сортировка: <span><select name="sort">
                <option value="sort_1">Сортировка №1</option>
                <option value="sort_2">Сортировка №2</option>
                <option value="sort_3">Сортировка №3</option>
            </select></span></div>
            <div className={classes.page}>На странице: <span><select name="activePage">
                <option value="activePage">{currentPage}</option>
            </select></span></div>
        </div>
        <div className={classes.container}>
            {currentProducts.map((product) => <div key={product.id} className={classes.productItem}><ProductItemContent
                image={product.image}
                title={product.title}
                cost={product.cost}/>
            </div>)}
        </div>
        <div className={classes.pageSlider}><PageSlider maxPage={maxPage} currentPage={currentPage}
                                                        setCurrentPage={setCurrentPage}/></div>
    </div>
}

export default ProductPagination;