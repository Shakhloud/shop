import React, {useEffect, useState} from 'react';
import classes from "./ProductPagination.module.css";
import {Product} from "./../../../store/Server";
import ProductItemContent from "../product_item_content/ProductItemContent";
import PageSlider from "../page_slider/PageSlider";
import {Select, Input, Slider} from 'antd';

const ProductPagination = (props: any) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentProducts, setCurrentProducts] = useState<Array<Product>>([]);
    const [maxPage, setMaxPage] = useState(0);
    const [itemsOnOnePage, setItemsOnOnePage] = useState(8);
    const [filterMode, setFilterMode] = useState(0);
    const [filterItemName, setFilterItemName] = useState('');

    useEffect(() => {
        const response = props.getPageData(currentPage, itemsOnOnePage, filterItemName);
        setMaxPage(response.maxPage);
        setCurrentProducts(response.data);
    }, [currentPage, itemsOnOnePage, filterItemName]);

    const itemsOnOnePageHandler = (e: any) => {
        setItemsOnOnePage(Number(e.value));
    };

    const filterNumberHandler = (e: any) => {
        setFilterMode(Number(e.value));
        if (e.value !== 1) {
            setFilterItemName('');
        }
    };

    const filterInputHandler = (e: any) => {
        setFilterItemName(e.target.value);
    };

    return <div>
        <div className={classes.header}>
            <div className={classes.title}><span>Дж</span>инсы <span className={classes.title__under}>Любые размеры и формы</span>
            </div>
            {/*<div className={classes.sort}>Сортировка: <span><select name="sort">
                <option value="sort_1">Сортировка №1</option>
                <option value="sort_2">Сортировка №2</option>
                <option value="sort_3"></option>
            </select></span></div>*/}
            {/*<div className={classes.page}>На странице: <span><select name="itemsPage">
                <option value="five">4</option>
                <option value="eight">8</option>
                <option value="sixteen">16</option>
            </select></span></div>*/}
            <div>
                <Select
                    labelInValue
                    defaultValue={{value: '0', label: 'Выберите режим фильтра'}}
                    onChange={filterNumberHandler}
                    options={[
                        {
                            value: '0',
                            label: 'Без фильра',
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
                {(filterMode === 1) ?
                    <Input placeholder="Введите имя товара" value={filterItemName} onChange={filterInputHandler}/> : ''}
                {(filterMode === 2) ? <Slider
                    range
                    min={0}
                    max={20000}
                    step={50}
                    defaultValue={[0, 20000]}
                    /*onChange={onChange}
                    onAfterChange={onAfterChange}*/
                /> : ''}

            </div>
            <Select
                labelInValue
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