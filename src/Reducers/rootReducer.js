
const initState = {
    "products":[
				
        {
            productId:'33520b42-8960-4e78-9d3d-8eccab6b2bc6',
            'productName':'macbook',
            'brand':'apple',
            'price':'100000',
            'quantity':'4'
        },
        {
            'productId':'60374637-ae82-4e0e-b20e-c42e3bc5bbf6',
            'productName':'Play Station 4',
            'brand':'sony',
            'price':'33000',
            'quantity':'2'
        },
        {
            'productId':'9c3914ba-ee5f-4b8a-b33c-61b11ed92566',
            'productName':'oneplus6t',
            'brand':'oneplus',
            'price':'37000',
            'quantity':'1'
        }
    ],
    "totalCost":'542423',
    "cartId":'445234475'
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;