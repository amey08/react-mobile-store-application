import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ProductForm extends Component{
    constructor(){
        super();
        this.submit = this.submit.bind(this);
    }
    submit(e){
        e.preventDefault();
        console.log(this.refs.name.value," :: ", this.refs.price.value);
        var Product = {
            name: this.refs.name.value,
            price: Number(this.refs.price.value) 
        }
        this.props.handleCreateNewProduct(Product);
        this.refs.name.value = "";
        this.refs.price.value = "";
    }
    render(){
        return(
        <form onSubmit={this.submit}>
            <input type="text" placeholder="Product Name" ref="name"/>
            <input type="text" placeholder="Product Price" ref="price"/>            
            <button >Submit</button><br/>
            <hr/>
        </form>);
    }
}
ProductForm.propTypes = {
    handleCreateNewProduct: PropTypes.func
}
export default ProductForm;