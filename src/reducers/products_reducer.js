import charectors_json from "../data/product.json";
import {ADD_PRODUCT} from '../actions';
import {REMOVE_PRODUCT} from '../actions';
import {createProduct} from './helper'


function productsStore (state = charectors_json , action) {
    switch (action.type) {
        case ADD_PRODUCT:
            let products = state.filter (item => item.id !== action.id);
            return products;
        case REMOVE_PRODUCT:
            products = [...state , createProduct(action.id)]
            return products
        default:
            return state;
    }
}

export default productsStore;