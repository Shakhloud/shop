import React, {useEffect, useState} from 'react';
import classes from "./PageSlider.module.css";
import arrowRight from "./../../../img/content/product_slider/arrow-right.svg";
import arrowLeft from "./../../../img/content/product_slider/arrow-left.svg";

const PageSlider = (props: any) => {
    const activePage = props.currentPage;
    let prevPage = activePage-1;
    let nextPage = activePage+1;
    if (props.currentPage === 1) {
        prevPage = props.maxPage;
        nextPage = activePage + 1;
    }
    if (props.currentPage === props.maxPage) {
        prevPage = activePage - 1;
        nextPage = 1;
    }

    const nextItemHandler = () => {
        if (props.currentPage === props.maxPage) {
            props.setCurrentPage(1);
        } else {
            props.setCurrentPage(props.currentPage + 1);
        }
    }
    const prevItemHandler = () => {
        if (props.currentPage === 1) {
            props.setCurrentPage(props.maxPage);
        } else {
            props.setCurrentPage(props.currentPage - 1);
        }
    }

    return <div className={classes.container}>
        <button onClick={prevItemHandler} className={classes.arrow}><img src={arrowLeft} alt="Стрелка влево"/></button>
        <button onClick={prevItemHandler} className={classes.prev + ' ' + classes.btn}><span>{prevPage}</span></button>
        <button className={classes.active + ' ' + classes.btn}><span>{activePage}</span></button>
        <button onClick={nextItemHandler} className={classes.next + ' ' + classes.btn}><span>{nextPage}</span></button>
        <button onClick={nextItemHandler} className={classes.arrow}><img src={arrowRight} alt="Стрелка вправо"/>
        </button>
    </div>
}

export default PageSlider;

