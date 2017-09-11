import React , {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addProductById} from '../actions'

class ProductList extends Component {
    render () {
        console.log("this.props" , this.props)        
        return (
            <div> 
                <ul className="list-group" >{
                    this.props.products.map (c =>{
                        return (
                            <li key ={c.id} className = "list-group-item">
                                <div className = "list-item" >
                                    {c.name} {' - '} { c.price} Rs.
                                    <div onClick= {
                                        () => this.props.addProductById (c.id)
                                    } className = "list-item right-button">
                                        +
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }</ul>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return{
        products : state.products
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addProductById } ,dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductList);