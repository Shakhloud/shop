import promo1 from "./../img/content/promo_slider/promo1.png";

type Product = {
    id: number,
    image: string,
    title: string,
    desc: string | null,
    cost: number,
};

type Store = {
    sliderProducts: Array<Product>,
    paginationProducts: Array<Product>,
};

class Server {
    private readonly store: Store;

    constructor() {
        this.store = createStore();
    }
    public getStore(): Store {
        return this.store;
    }
}

const createStore: () => Store = () => {
    return {
        sliderProducts: [
            {
                id: 0,
                image: 'https://www.machinescreenprinters.com.au/wp-content/uploads/2021/10/alstyle_1301_gold.jpg',
                title: 'T-shirt #1',
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                cost: 15000,
            },
            {
                id: 1,
                image: 'https://www.machinescreenprinters.com.au/wp-content/uploads/2021/10/alstyle_1301_gold.jpg',
                title: 'T-shirt #2',
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                cost: 13000,
            },
            {
                id: 2,
                image: 'https://www.machinescreenprinters.com.au/wp-content/uploads/2021/10/alstyle_1301_gold.jpg',
                title: 'T-shirt #3',
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                cost: 16000,
            },
            {
                id: 3,
                image: 'https://www.machinescreenprinters.com.au/wp-content/uploads/2021/10/alstyle_1301_gold.jpg',
                title: 'T-shirt #4',
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                cost: 19000,
            },
            {
                id: 4,
                image: 'https://www.machinescreenprinters.com.au/wp-content/uploads/2021/10/alstyle_1301_gold.jpg',
                title: 'T-shirt #5',
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
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
                cost: 3000,
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
                cost: 3000,
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
        ]
    }
}
export const server = new Server();