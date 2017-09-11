import {ADD_PRODUCT} from '../actions';
import {REMOVE_PRODUCT} from '../actions';
import {createProduct} from './helper'

function carts(state = [], action) {
    switch (action.type){
        case ADD_PRODUCT:
            let heros = [...state , createProduct(action.id)]
            return heros
        
        case REMOVE_PRODUCT:
            heros = state.filter (item => item.id !== action.id);
            return heros; 

        default:
            return state;
    }
}


export default carts;