import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Product extends Component{
    constructor(props){
        super(props);
        this.state = {
            qty: 0
        };
        this.buy = this.buy.bind(this);
        this.show = this.show.bind(this);
    }
    show(){
        this.props.handleShow(this.props.name);
    }
    buy(){
        this.setState( {qty: this.state.qty + 1});
        this.props.handleTotal(this.props.price);
    }
    render(){
        return(
            <div>
                <p>{this.props.name} - {this.props.price} Rs.</p>
                <button onClick={this.buy}>BUY</button>
                <button onClick={this.show}>Show</button>
                <h5>Qty = {this.state.qty}</h5>
                <hr />
            </div>
        );
    }
}
Product.propTypes = {
    name: PropTypes.String,
    price: PropTypes.String,
    handleShow: PropTypes.func,
    handleTotal: PropTypes.func
};
export default Product;