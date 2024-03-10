import {ADD_TO_CART, REMOVE_FROM_CART} from "../boilerplate/boilerplate";

export const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload]
        case REMOVE_FROM_CART:
            return state.filter((product)=>{
                return product.id!==action.payload
            })
        default:
            return [...state]
    }
}