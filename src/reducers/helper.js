import product_json from "../data/product.json";

 export function createProduct (id) {
    let product = product_json.find(product => product.id === id);
    return product
}

