import {makeAutoObservable} from 'mobx'
import {Product} from './../store/Server'

export type FrontendBasketItem = {
    product: Product,
    size: 'XL' | 'XXL' | 'M' | 'S',
    color: 'Серый' | 'Черный' | 'Белый' | 'Желтый' | 'Голубой',
    count: number,
    commonCost: number,
}
export type FrontendBasket = {
    items: Array<FrontendBasketItem>;
}

class BasketService {

    basket: FrontendBasket | null = null

    constructor() {
        makeAutoObservable(this);
    }

    getBasket() {
        return this.basket;
    }

    setBasket(basket: FrontendBasket | null) {
        this.basket = basket;
    }
}

export const basketService = new BasketService();