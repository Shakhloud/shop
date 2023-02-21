type Cloth = {
    id: number,
    image: string,
    title: string,
    cost: number,
};

type Store = {
    clothes: Array<Cloth>
};


export const ServerData: Store = {
    clothes: [
        {
            id: 0,
            image: 'https://www.machinescreenprinters.com.au/wp-content/uploads/2021/10/alstyle_1301_gold.jpg',
            title: 'T-shirt #1',
            cost: 15000,
        },
        {
            id: 1,
            image: 'https://www.machinescreenprinters.com.au/wp-content/uploads/2021/10/alstyle_1301_gold.jpg',
            title: 'T-shirt #2',
            cost: 13000,
        },
        {
            id: 2,
            image: 'https://www.machinescreenprinters.com.au/wp-content/uploads/2021/10/alstyle_1301_gold.jpg',
            title: 'T-shirt #3',
            cost: 16000,
        },
        {
            id: 3,
            image: 'https://www.machinescreenprinters.com.au/wp-content/uploads/2021/10/alstyle_1301_gold.jpg',
            title: 'T-shirt #4',
            cost: 19000,
        },
        {
            id: 4,
            image: 'https://www.machinescreenprinters.com.au/wp-content/uploads/2021/10/alstyle_1301_gold.jpg',
            title: 'T-shirt #5',
            cost: 11000,
        },
    ],
}