import React , {Component} from 'react'; 
import {connect } from 'react-redux';

class CartStats extends Component {

    strength () {
        let price = 0;
        this.props.carts.forEach (prod => price += prod.price)
        return price;
    }

   render () {
       return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                         <b>Total Product Price is : </b> {this.strength()} Rs.
                    </li>
                </ul>
            </div>

       )
   }
}


function mapStateToProps (state) {
    return {
        carts : state.carts  
    }
}

export default connect (mapStateToProps , null) (CartStats); 