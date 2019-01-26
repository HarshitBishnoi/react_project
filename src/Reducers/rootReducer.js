
const initState = {
    "products":[
				
        {
            'productId':'P01',
            'productName':'macbook',
            'brand':'apple',
            'price':'100000',
            'quantity':'4'
        },
        {
            'productId':'P02',
            'productName':'Play Station 4',
            'brand':'sony',
            'price':'33000',
            'quantity':'2'
        }
    ],
    "totalCost":'542423',
    "cartId":'445234475'
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;