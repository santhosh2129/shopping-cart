import {combineReducers} from 'redux';
import products from './products_reducer';
import carts from './cart_reducers';


const rootReducer = combineReducers ({
    products,
    carts
})

export default rootReducer;