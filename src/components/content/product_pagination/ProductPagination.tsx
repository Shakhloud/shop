import React, {useEffect, useState} from 'react';
import classes from "./ProductPagination.module.css";
import {Product} from "./../../../store/Server";
import ProductItemContent from "../product_item_content/ProductItemContent";


const ProductPagination = (props: any) => {
    const [currentPage, setPage] = useState(2);
    const [currentProducts, setCurrentProducts] = useState<Array<Product>>([]);
    const itemsOnOnePage = 7;
    useEffect(() => {
        setCurrentProducts(props.getPageData(currentPage, itemsOnOnePage));
    }, [currentPage]);
    console.log(useState());


    return <div className={classes.container}>
        {currentProducts.map((product) => <ProductItemContent image={product.image} title={product.title} cost={product.cost}/>)}
    </div>
}

export default ProductPagination;