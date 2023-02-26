import {makeAutoObservable} from 'mobx'
import {Product, server} from './../store/Server'
import {authService} from "./Auth";

export type Size = {
    size: 'XL' | 'XXL' | 'M' | 'S',
}
export type Color = {
    color: 'Серый' | 'Черный' | 'Белый' | 'Желтый' | 'Голубой';
}

export type FrontendBasketItem = {
    product: Product,
    size: Size,
    color: Color,
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

    update() {
        const login = authService.getLogin();
        if (!login) return;
        this.setBasket(server.getBasket(login));
    }
}

export const basketService = new BasketService();