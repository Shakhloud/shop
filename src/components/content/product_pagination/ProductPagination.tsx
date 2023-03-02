import React, {useEffect, useState} from 'react';
import classes from "./ProductPagination.module.css";
import {Product} from "./../../../store/Server";
import ProductItemContent from "../product_item_content/ProductItemContent";
import PageSlider from "../page_slider/PageSlider";
import {Select, Input, Slider} from 'antd';
import {server} from "./../../../store/Server";
import {authService} from "../../../store/Auth";
import {basketService} from '../../../store/Basket';

const ProductPagination = (props: any) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentProducts, setCurrentProducts] = useState<Array<Product>>([]);
    const [maxPage, setMaxPage] = useState(0);
    const [itemsOnOnePage, setItemsOnOnePage] = useState(8);
    const [filterMode, setFilterMode] = useState(0);
    const [filterItemName, setFilterItemName] = useState('');
    const [filterCurrentMaxValue, setFilterCurrentMaxValue] = useState(20000);
    const [filterCurrentMinValue, setFilterCurrentMinValue] = useState(0);

    useEffect(() => {
        const response = props.getPageData(currentPage, itemsOnOnePage, filterItemName, filterCurrentMinValue, filterCurrentMaxValue);
        setMaxPage(response.maxPage);
        setCurrentProducts(response.data);
    }, [currentPage, itemsOnOnePage, filterItemName, filterCurrentMaxValue, filterCurrentMinValue]);

    const itemsOnOnePageHandler = (e: any) => {
        setCurrentPage(1);
        setItemsOnOnePage(Number(e.value));
    };

    const filterModeHandler = (e:any) => {
        setFilterMode(Number(e));
        if (Number(e) !== 1) {
            setFilterItemName('');
        }
        if (Number(e) !== 2) {
            setFilterCurrentMaxValue(20000);
            setFilterCurrentMinValue(0);
        }
    };

    const filterInputHandler = (e: any) => {
        setCurrentPage(1);
        setFilterItemName(e.target.value);
    };

    const filterSliderHandler = (e: any) => {
        setCurrentPage(1);
        setFilterCurrentMaxValue(e[1]);
        setFilterCurrentMinValue(e[0]);
    };

    return <div>
        <div className={classes.header}>
            <div className={classes.title}><span>Дж</span>инсы <span className={classes.title__under}>Любые размеры и формы</span>
            </div>
            <div className={classes.filter}>
                Фильтр :
                <div className={classes.filter__form}>
                    <Select
                        popupClassName={classes.filter__formDropdown}
                        style={{
                            color: '#FFC700',
                            width: 220,
                        }}
                        defaultValue={{value: 'Выберите режим фильтра', label: 'Выберите режим фильтра'}}
                        onChange={filterModeHandler}

                        options={[
                            {
                                value: '0',
                                label: 'Без фильтра',
                            },
                            {
                                value: '1',
                                label: 'Фильтр по имени',
                            },
                            {
                                value: '2',
                                label: 'Фильтр по цене',
                            },

                        ]}
                    />
                </div>
                {(filterMode === 1) ?
                    <Input className={classes.input} placeholder="Введите имя товара" value={filterItemName}
                           onChange={filterInputHandler}/> : ''}
                {(filterMode === 2) ? <Slider
                    className={classes.slider}
                    range
                    min={0}
                    max={20000}
                    step={50}
                    onChange={filterSliderHandler}
                    value={[filterCurrentMinValue, filterCurrentMaxValue]}
                /> : ''}

            </div>
            <div className={classes.pageNumber}>
                На странице:
                <Select
                    popupClassName={classes.filter__formDropdown}
                    className={classes.pageNumber__select}
                    defaultValue={{value: '8', label: '8'}}
                    onChange={itemsOnOnePageHandler}
                    options={[
                        {
                            value: '4',
                            label: '4',
                        },
                        {
                            value: '8',
                            label: '8',
                        },
                        {
                            value: '16',
                            label: '16',
                        },
                    ]}
                />
            </div>
        </div>
        <div className={classes.container}>
            {currentProducts.map((product) => <div key={product.id} className={classes.productItem}><ProductItemContent
                imageStyle={'imageStylePagination'}
                updateBasket={basketService.update.bind(basketService)}
                productId={product.id}
                login={authService.getLogin()}
                addItem={server.addBasketItem.bind(server)}
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