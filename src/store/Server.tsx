import promo1 from "./../img/content/promo_slider/promo1.png";
import Auth from "../components/auth/Auth";
import FrontendBasketContent from "../components/content/basket/basket_content/BasketContent";
import {basketService, Color, FrontendBasket, FrontendBasketItem, Size} from "./Basket";

export type Product = {
    id: number,
    image: string,
    title: string,
    desc: string | null,
    cost: number,
};

type ServerBasketItem = {
    productId: number,
    size: Size,
    color: Color,
    count: number,
    commonCost: number,
}

type PageResponse = {
    data: Array<Product>,
    maxPage: number,
}

type Store = {
    sliderProducts: Array<Product>,
    paginationProducts: Array<Product>,

    allProducts: Array<Product>,
    adminBasket: ServerBasket,
    user1Basket: ServerBasket,
    user2Basket: ServerBasket,
};

type ServerBasket = {
    items: Array<ServerBasketItem>;
    totalCost: number | null;
}

export type AuthResponse = {
    isAuth: boolean,
    login: string | null,
    role: 'admin' | 'user' | null,
}

class Server {
    private readonly store: Store;

    constructor() {
        this.store = createStore();
        this.store.allProducts = [
            ...this.store.paginationProducts,
            ...this.store.sliderProducts,
        ]
    }

    public getStore(): Store {
        return this.store;
    }

    public getPageData = (pageNum: number, countOnOnePage: number, filterItemName: string, filterMinValue: number, filterMaxValue: number): PageResponse => {
        const clearFilterItemName = filterItemName.trim().toLowerCase();
        const filteredStorePaginationProducts = this.store.paginationProducts.filter(element => (clearFilterItemName === '') ? true : element.title.toLowerCase().includes(clearFilterItemName)).filter(element => element.cost <= filterMaxValue && element.cost >= filterMinValue);
        const countOfAllProducts = filteredStorePaginationProducts.length;
        const startIndex = (pageNum - 1) * countOnOnePage;
        let resultProductOnPage: Array<Product> = [];
        if (startIndex < countOfAllProducts) {
            if ((countOfAllProducts - startIndex) > countOnOnePage) {
                for (let i = 0; i < (countOnOnePage); i++) {
                    resultProductOnPage[i] = filteredStorePaginationProducts[startIndex + i];
                }
            } else {
                for (let i = 0; i < (countOfAllProducts - startIndex); i++) {
                    resultProductOnPage[i] = filteredStorePaginationProducts[startIndex + i];
                }
            }
        }
        return {
            data: resultProductOnPage,
            maxPage: Math.ceil(countOfAllProducts / countOnOnePage),
        };
    }

    public makeAuth = (login: string, password: string): AuthResponse => {
        switch (login) {
            case 'admin' : {
                if (password === 'admin') {
                    return {
                        isAuth: true,
                        login: 'admin',
                        role: 'admin'
                    }
                }
                break;
            }
            case 'user1' : {
                if (password === 'user1') {
                    return {
                        isAuth: true,
                        login: 'user1',
                        role: 'user'
                    }
                }
                break;
            }
            case 'user2' : {
                if (password === 'user2') {
                    return {
                        isAuth: true,
                        login: 'user2',
                        role: 'user'
                    }
                }
                break;
            }
        }
        return {
            isAuth: false,
            login: null,
            role: null,
        }
    }
    public getBasket = (login: string): FrontendBasket | null => {
        switch (login) {
            case 'admin' : {
                return this.transformBasket(this.store.adminBasket);
            }
            case 'user1' : {
                return this.transformBasket(this.store.user1Basket);

            }
            case 'user2': {
                return this.transformBasket(this.store.user2Basket);
            }
        }
        return null;
    }
    public transformBasket = (serverBasket: ServerBasket): FrontendBasket => {
        return {
            items: serverBasket.items.map(item => {
                const productIndex = this.store.allProducts.map(item => item.id).indexOf(item.productId);
                return {
                    product: this.store.allProducts[productIndex],
                    size: item.size,
                    color: item.color,
                    count: item.count,
                    commonCost: item.commonCost,
                }
            }),
            totalCost: serverBasket.totalCost,
        }
    }

    public addBasketItemForUser(productId: number, basket: ServerBasket) {
        const filterItems = basket.items.filter(item => item.productId === productId);
        if (filterItems.length === 0) {
            basket.items.push({
                productId: productId,
                size: {size: 'S'},
                color: {color: 'Белый'},
                count: 1,
                commonCost: this.store.allProducts.filter(item => item.id === productId)[0].cost,
            });
        } else {
            filterItems[0].count = filterItems[0].count + 1;
        }
    }

    public addBasketItem(login: string, productId: number) {
        debugger
        switch (login) {
            case 'admin' : {
                this.addBasketItemForUser(productId, this.store.adminBasket);
                this.calcTotalCostOfBasket(this.store.adminBasket);
                break;
            }
            case 'user1' : {
                this.addBasketItemForUser(productId, this.store.user1Basket);
                this.calcTotalCostOfBasket(this.store.user1Basket);
                break;
            }
            case 'user2': {
                this.addBasketItemForUser(productId, this.store.user2Basket);
                this.calcTotalCostOfBasket(this.store.user2Basket);
                break;
            }
        }
    }

    public deleteBasketItem(login: string, productId: number) {
        switch (login) {
            case 'admin' : {
                const deleteIndex = this.store.adminBasket.items.map(item => item.productId).indexOf(productId);
                this.store.adminBasket.items.splice(deleteIndex, 1);
                this.calcTotalCostOfBasket(this.store.adminBasket);
                break;
            }
            case 'user1' : {
                const deleteIndex = this.store.user1Basket.items.map(item => item.productId).indexOf(productId);
                this.store.user1Basket.items.splice(deleteIndex, 1);
                this.calcTotalCostOfBasket(this.store.user1Basket);
                break;
            }
            case 'user2': {
                const deleteIndex = this.store.user2Basket.items.map(item => item.productId).indexOf(productId);
                this.store.user2Basket.items.splice(deleteIndex, 1);
                this.calcTotalCostOfBasket(this.store.user2Basket);
                break;
            }
        }
    }

    public changeSizeOfItemInBasket(login: string, size: Size, productId: number) {
        switch (login) {
            case 'admin' : {
                const currentItem = this.store.adminBasket?.items.filter(item => item.productId === productId)[0];
                currentItem.size = size;
                break;
            }
            case 'user1' : {
                const currentItem = this.store.user1Basket?.items.filter(item => item.productId === productId)[0];
                currentItem.size = size;
                break;
            }
            case 'user2': {
                const currentItem = this.store.user2Basket?.items.filter(item => item.productId === productId)[0];
                currentItem.size = size;
                break;
            }
        }
    }

    public changeColorOfItemInBasket(login: string, color: Color, productId: number) {
        switch (login) {
            case 'admin' : {
                const currentItem = this.store.adminBasket?.items.filter(item => item.productId === productId)[0];
                currentItem.color = color;
                break;
            }
            case 'user1' : {
                const currentItem = this.store.user1Basket?.items.filter(item => item.productId === productId)[0];
                currentItem.color = color;
                break;
            }
            case 'user2': {
                const currentItem = this.store.user2Basket?.items.filter(item => item.productId === productId)[0];
                currentItem.color = color;
                break;
            }
        }
    }

    public changeCountOfItemInBasket(login: string, count: number, productId: number) {
        switch (login) {
            case 'admin' : {
                const currentItem = this.store.adminBasket?.items.filter(item => item.productId === productId)[0];
                currentItem.count = count;
                break;
            }
            case 'user1' : {
                const currentItem = this.store.user1Basket?.items.filter(item => item.productId === productId)[0];
                currentItem.count = count;
                break;
            }
            case 'user2': {
                const currentItem = this.store.user2Basket?.items.filter(item => item.productId === productId)[0];
                currentItem.count = count;
                break;
            }
        }
    }

    public changeCommonCostOfItemInBasket(login: string, commonCost: number, productId: number) {
        switch (login) {
            case 'admin' : {
                const currentItem = this.store.adminBasket?.items.filter(item => item.productId === productId)[0];
                currentItem.commonCost = commonCost;
                this.calcTotalCostOfBasket(this.store.adminBasket);
                break;
            }
            case 'user1' : {
                const currentItem = this.store.user1Basket?.items.filter(item => item.productId === productId)[0];
                currentItem.commonCost = commonCost;
                this.calcTotalCostOfBasket(this.store.user1Basket);
                break;
            }
            case 'user2': {
                const currentItem = this.store.user2Basket?.items.filter(item => item.productId === productId)[0];
                currentItem.commonCost = commonCost;
                this.calcTotalCostOfBasket(this.store.user2Basket);
                break;
            }
        }
    }

    public calcTotalCostOfBasket(basket: ServerBasket) {
        const resultCost = basket.items.reduce((sum, current) => sum + current.commonCost, 0)
            basket.totalCost = resultCost;
    }

    public addNewProductToCatalog(image: string, title: string, desc: string | null, cost: number,) {
        const newProduct: Product = {
            id: this.store.allProducts.length + 1,
            image: image,
            title: title,
            desc: desc,
            cost: cost,
        }
        this.store.paginationProducts.push(newProduct);
        this.store.allProducts.push(newProduct);
    }

    public deleteProductFromCatalog(productId: number) {
        const deleteIndexPagination = this.store.paginationProducts.map(item => item.id).indexOf(productId);
        const deleteIndexAllProducts = this.store.allProducts.map(item => item.id).indexOf(productId);
        this.store.paginationProducts.splice(deleteIndexPagination, 1);
        this.store.allProducts.splice(deleteIndexAllProducts, 1);
    }

    public changeProductFromCatalog(productId: number, title: string | null, image: string | null, desc: string | null, cost: number | null) {
        debugger
        if (this.store.allProducts.filter(item => item.id === productId).length !== 0) {
            const changeProductAllProduct = this.store.allProducts.filter(item => item.id === productId)[0];
            if (title) changeProductAllProduct.title = title;
            if (image) changeProductAllProduct.image = image;
            if (desc) changeProductAllProduct.desc = desc;
            if (cost) changeProductAllProduct.cost = cost;
        }
        if (this.store.paginationProducts.filter(item => item.id === productId).length !== 0) {
            const changeProductPagination = this.store.paginationProducts.filter(item => item.id === productId)[0];
            if (title) changeProductPagination.title = title;
            if (image) changeProductPagination.image = image;
            if (desc) changeProductPagination.desc = desc;
            if (cost) changeProductPagination.cost = cost;
        }

    }
}


const createStore: () => Store = () => {
    return {
        sliderProducts: [
            {
                id: 40,
                image: 'https://www.machinescreenprinters.com.au/wp-content/uploads/2021/10/alstyle_1301_gold.jpg',
                title: 'T-shirt #1',
                desc: null,
                cost: 15000,
            },
            {
                id: 41,
                image: 'https://www.machinescreenprinters.com.au/wp-content/uploads/2021/10/alstyle_1301_gold.jpg',
                title: 'T-shirt #2',
                desc: null,
                cost: 13000,
            },
            {
                id: 42,
                image: 'https://www.machinescreenprinters.com.au/wp-content/uploads/2021/10/alstyle_1301_gold.jpg',
                title: 'T-shirt #3',
                desc: null,
                cost: 16000,
            },
            {
                id: 43,
                image: 'https://www.machinescreenprinters.com.au/wp-content/uploads/2021/10/alstyle_1301_gold.jpg',
                title: 'T-shirt #4',
                desc: null,
                cost: 19000,
            },
            {
                id: 44,
                image: 'https://www.machinescreenprinters.com.au/wp-content/uploads/2021/10/alstyle_1301_gold.jpg',
                title: 'T-shirt #5',
                desc: null,
                cost: 11000,
            }
        ],
        paginationProducts: [
            {
                id: 0,
                image: 'https://basket-01.wb.ru/vol127/part12781/12781257/images/big/1.jpg',
                title: 'Jeans #1',
                desc: null,
                cost: 3000,
            },
            {
                id: 1,
                image: 'https://storage-cdn8.gloria-jeans.ru/medias/GJN017058-2-01-300Wx300H.jpg?context=bWFzdGVyfHByb2R1Y3R8MjEwOTV8aW1hZ2UvanBlZ3xoOTEvaGU0LzkyNjE2MzcxMDc3NDIvR0pOMDE3MDU4LTItMDFfMzAwV3gzMDBILmpwZ3w5NGJkMmZjYWNjYTgzZWNiNWRhMDk0N2Q3OTc2M2MwNDRlY2Y2YjA5MDMxMmRhNmRjMjVlYmRmMjUyZDYxNDlj',
                title: 'Jeans #2',
                desc: null,
                cost: 7000,
            },
            {
                id: 2,
                image: 'https://www.gloria-jeans.ru/pictures/dzinsy-mom-dla-devocki_GJN016777-2_01_515Wx515H.jpg',
                title: 'Jeans #3',
                desc: null,
                cost: 10000,
            },
            {
                id: 3,
                image: 'https://static.housebrand.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/Z/F/ZF951-57J-001-1.jpg',
                title: 'Jeans #4',
                desc: null,
                cost: 5000,
            },
            {
                id: 4,
                image: 'https://storage-cdn8.gloria-jeans.ru/medias/GJN016319-2-01-300Wx300H.jpg?context=bWFzdGVyfHByb2R1Y3R8MjI1NzR8aW1hZ2UvanBlZ3xoOTMvaGE4LzkyMzc0MzQ0OTkxMDIvR0pOMDE2MzE5LTItMDEtMzAwV3gzMDBILmpwZ3wxYzAwMTRjN2M0ZDE1ZGI1OWQwOTY3YWQ1YmM0NDRiMzM3NjYzYjA2NjViODViNjBmMzlkYjQwOTczZmE2OGE1',
                title: 'Jeans #5',
                desc: null,
                cost: 3000,
            },
            {
                id: 5,
                image: 'https://www.gloria-jeans.ru/pictures/dzinsy-mom-dla-devocki_GJN016777-2_01_515Wx515H.jpg',
                title: 'Jeans #6',
                desc: null,
                cost: 3000,
            },
            {
                id: 6,
                image: 'https://static.housebrand.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/Z/F/ZF951-57J-001-1.jpg',
                title: 'Jeans #7',
                desc: null,
                cost: 3000,
            },
            {
                id: 7,
                image: 'https://minnim.ua/image/cache/catalog/14.12.PACKSHOTS/dzhinsi_mom_black_m_1-450x675.jpg',
                title: 'Jeans #8',
                desc: null,
                cost: 3000,
            },
            {
                id: 8,
                image: 'https://minnim.ua/image/cache/catalog/%2017.01.22/6-450x675.jpg',
                title: 'Jeans #9',
                desc: null,
                cost: 3000,
            },
            {
                id: 9,
                image: 'https://www.gloria-jeans.ru/pictures/dzinsy-mom-dla-devocki_GJN016777-2_01_515Wx515H.jpg',
                title: 'Jeans #10',
                desc: null,
                cost: 3000,
            },
            {
                id: 10,
                image: 'https://minnim.ua/image/cache/catalog/14.12.PACKSHOTS/dzhinsi_mom_black_m_1-450x675.jpg',
                title: 'Jeans #11',
                desc: null,
                cost: 3000,
            },
            {
                id: 11,
                image: 'https://static.housebrand.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/Z/F/ZF951-57J-001-1.jpg',
                title: 'Jeans #12',
                desc: null,
                cost: 3000,
            },
            {
                id: 12,
                image: 'https://www.gloria-jeans.ru/pictures/dzinsy-mom-dla-devocki_GJN016777-2_01_515Wx515H.jpg',
                title: 'Jeans #13',
                desc: null,
                cost: 3000,
            },
            {
                id: 13,
                image: 'https://minnim.ua/image/cache/catalog/%2017.01.22/6-450x675.jpg',
                title: 'Jeans #14',
                desc: null,
                cost: 3000,
            },
            {
                id: 14,
                image: 'https://minnim.ua/image/cache/catalog/%2017.01.22/6-450x675.jpg',
                title: 'Jeans #15',
                desc: null,
                cost: 3000,
            },
            {
                id: 15,
                image: 'https://static.housebrand.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/Z/F/ZF951-57J-001-1.jpg',
                title: 'Jeans #16',
                desc: null,
                cost: 3000,
            },
            {
                id: 16,
                image: 'https://www.gloria-jeans.ru/pictures/dzinsy-mom-dla-devocki_GJN016777-2_01_515Wx515H.jpg',
                title: 'Jeans #17',
                desc: null,
                cost: 3000,
            },
            {
                id: 17,
                image: 'https://storage-cdn8.gloria-jeans.ru/medias/GJN017780-1-01-300Wx300H.jpg?context=bWFzdGVyfHByb2R1Y3R8MTMyNzl8aW1hZ2UvanBlZ3xoN2YvaDRhLzkyNjIxMzU5MzUwMDYvR0pOMDE3NzgwLTEtMDFfMzAwV3gzMDBILmpwZ3w3OTFmMDc0MDExMzVkN2Q1Mzk5NzUzZmVjZjEyNjVkMDVlNGMzOGYwZTZkNTU2MDhkZGU1Yzk3NzFiN2Q4NjUy',
                title: 'Jeans #18',
                desc: null,
                cost: 3000,
            },
            {
                id: 18,
                image: 'https://minnim.ua/image/cache/catalog/%2017.01.22/6-450x675.jpg',
                title: 'Jeans #19',
                desc: null,
                cost: 3000,
            },
            {
                id: 19,
                image: 'https://www.gloria-jeans.ru/pictures/dzinsy-mom-dla-devocki_GJN016777-2_01_515Wx515H.jpg',
                title: 'Jeans #20',
                desc: null,
                cost: 3000,
            },
            {
                id: 20,
                image: 'https://minnim.ua/image/cache/catalog/%2017.01.22/8-450x675.jpg',
                title: 'Jeans #21',
                desc: null,
                cost: 3000,
            },
            {
                id: 21,
                image: 'https://minnim.ua/image/cache/catalog/14.12.PACKSHOTS/dzhinsi_mom_black_m_1-450x675.jpg',
                title: 'Jeans #22',
                desc: null,
                cost: 3000,
            },
            {
                id: 22,
                image: 'https://static.housebrand.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/Z/F/ZF951-57J-001-1.jpg',
                title: 'Jeans #23',
                desc: null,
                cost: 3000,
            },
            {
                id: 23,
                image: 'https://www.gloria-jeans.ru/pictures/dzinsy-mom-dla-devocki_GJN016777-2_01_515Wx515H.jpg',
                title: 'Jeans #24',
                desc: null,
                cost: 3000,
            },
            {
                id: 24,
                image: 'https://minnim.ua/image/cache/catalog/%2017.01.22/8-450x675.jpg',
                title: 'Jeans #25',
                desc: null,
                cost: 3000,
            },
            {
                id: 25,
                image: 'https://www.gloria-jeans.ru/pictures/dzinsy-mom-dla-devocki_GJN016777-2_01_515Wx515H.jpg',
                title: 'Jeans #26',
                desc: null,
                cost: 3000,
            },
            {
                id: 26,
                image: 'https://storage-cdn8.gloria-jeans.ru/medias/GJN017780-1-01-300Wx300H.jpg?context=bWFzdGVyfHByb2R1Y3R8MTMyNzl8aW1hZ2UvanBlZ3xoN2YvaDRhLzkyNjIxMzU5MzUwMDYvR0pOMDE3NzgwLTEtMDFfMzAwV3gzMDBILmpwZ3w3OTFmMDc0MDExMzVkN2Q1Mzk5NzUzZmVjZjEyNjVkMDVlNGMzOGYwZTZkNTU2MDhkZGU1Yzk3NzFiN2Q4NjUy',
                title: 'Jeans #27',
                desc: null,
                cost: 3000,
            },
            {
                id: 27,
                image: 'https://static.housebrand.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/Z/F/ZF951-57J-001-1.jpg',
                title: 'Jeans #28',
                desc: null,
                cost: 3000,
            },
            {
                id: 28,
                image: 'https://www.gloria-jeans.ru/pictures/dzinsy-mom-dla-devocki_GJN016777-2_01_515Wx515H.jpg',
                title: 'Jeans #29',
                desc: null,
                cost: 3000,
            },
            {
                id: 29,
                image: 'https://minnim.ua/image/cache/catalog/%2017.01.22/8-450x675.jpg',
                title: 'Jeans #30',
                desc: null,
                cost: 3000,
            },
            {
                id: 30,
                image: 'https://www.gloria-jeans.ru/pictures/dzinsy-mom-dla-devocki_GJN016777-2_01_515Wx515H.jpg',
                title: 'Jeans #31',
                desc: null,
                cost: 3000,
            },
            {
                id: 31,
                image: 'https://minnim.ua/image/cache/catalog/%2017.01.22/8-450x675.jpg',
                title: 'Jeans #32',
                desc: null,
                cost: 3000,
            },
            {
                id: 32,
                image: 'https://static.housebrand.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/Z/F/ZF951-57J-001-1.jpg',
                title: 'Jeans #33',
                desc: null,
                cost: 3000,
            },
            {
                id: 33,
                image: 'https://www.gloria-jeans.ru/pictures/dzinsy-mom-dla-devocki_GJN016777-2_01_515Wx515H.jpg',
                title: 'Jeans #34',
                desc: null,
                cost: 5000,
            },
            {
                id: 34,
                image: 'https://storage-cdn8.gloria-jeans.ru/medias/GJN017780-1-01-300Wx300H.jpg?context=bWFzdGVyfHByb2R1Y3R8MTMyNzl8aW1hZ2UvanBlZ3xoN2YvaDRhLzkyNjIxMzU5MzUwMDYvR0pOMDE3NzgwLTEtMDFfMzAwV3gzMDBILmpwZ3w3OTFmMDc0MDExMzVkN2Q1Mzk5NzUzZmVjZjEyNjVkMDVlNGMzOGYwZTZkNTU2MDhkZGU1Yzk3NzFiN2Q4NjUy',
                title: 'Jeans #35',
                desc: null,
                cost: 3000,
            },
            {
                id: 35,
                image: 'https://static.housebrand.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/Z/F/ZF951-57J-001-1.jpg',
                title: 'Jeans #36',
                desc: null,
                cost: 3000,
            },
            {
                id: 36,
                image: 'https://www.gloria-jeans.ru/pictures/dzinsy-mom-dla-devocki_GJN016777-2_01_515Wx515H.jpg',
                title: 'Jeans #37',
                desc: null,
                cost: 3000,
            },
            {
                id: 37,
                image: 'https://minnim.ua/image/cache/catalog/%2017.01.22/8-450x675.jpg',
                title: 'Jeans #38',
                desc: null,
                cost: 1000,
            },
            {
                id: 38,
                image: 'https://static.housebrand.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/Z/F/ZF951-57J-001-1.jpg',
                title: 'Jeans #39',
                desc: null,
                cost: 3000,
            },
            {
                id: 39,
                image: 'https://www.gloria-jeans.ru/pictures/dzinsy-mom-dla-devocki_GJN016777-2_01_515Wx515H.jpg',
                title: 'Jeans #40',
                desc: null,
                cost: 3000,
            },
        ],
        allProducts: [],
        adminBasket: {
            items:
                [
                    {
                        productId: 39,
                        size: {size: 'XL'},
                        color: {color: 'Серый'},
                        count: 3,
                        commonCost: 9000,
                    }
                ],
            totalCost: 9000,
        },
        user1Basket: {
            items:
                [
                    {
                        productId: 33,
                        size: {size: 'M'},
                        color: {color: 'Белый'},
                        count: 3,
                        commonCost: 15000,
                    }
                ],
            totalCost: 15000,
        },
        user2Basket: {
            items:
                [
                    {
                        productId: 37,
                        size: {size: 'S'},
                        color: {color: 'Черный'},
                        count: 3,
                        commonCost: 3000,
                    }
                ],
            totalCost: 3000,
        }
    }
}
export const server = new Server();
// @ts-ignore
window.server = server;