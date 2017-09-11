import React , {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removeProductById} from '../actions'

class CartList extends Component {
    render () {
        return (
            <div> 
            <ul className="list-group" >{
                this.props.carts.map (c =>{
                    return (
                        <li key ={c.id} className = "list-group-item">
                            <div className = "list-item" >
                                {c.name}
                                <div onClick= {
                                        () => this.props.removeProductById (c.id)
                                    } className = "list-item right-button">
                                        -
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
        carts : state.carts
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({removeProductById } ,dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps) (CartList);