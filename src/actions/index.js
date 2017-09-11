export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";


export function addProductById(id) {
    const action  = {
        type : ADD_PRODUCT,
        id
    }
    return action;
}

export function removeProductById(id) {
    const action = {
        type: REMOVE_PRODUCT,
        id
    }
    return action;
}