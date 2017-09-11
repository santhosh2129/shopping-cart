import React , {Component} from 'react';

import ProductList from './ProductList' 
import CartList from './CartList'
import ProductStats from './CartStats'


import '../styles/index.css';

class App extends Component {

    render () {
        return (
            <div className="App">
                <div className="col-md-4">
                <h2> Products List</h2>
                <ProductList/>
                </div>
                <div className="col-md-4">
                <h2> Selected Products</h2>
                <CartList/>
                </div>
                <div className="col-md-4">
                <h2>Cart Stats</h2>
                <ProductStats/>
                </div>
            </div>
        )
    }

}

export default App;