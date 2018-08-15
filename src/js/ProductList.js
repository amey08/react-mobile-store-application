import React, {Component} from 'react';
import Product from './Product';
import ProductForm from './ProductForm';
import Total from './Total';

class ProductList extends Component{
    constructor(){
        super();
        this.showProduct = this.showProduct.bind(this);
        this.calculateTotal = this.calculateTotal.bind(this);
        this.createNewProduct = this.createNewProduct.bind(this);
        this.state = {
            total : 0,
            productListArray:[
                {name: "Android", price:121},
                {name: "Apple", price:499},
                {name: "Nokia", price:50}
            ]
        };
    }
    createNewProduct(_obj){
        this.setState({
            productListArray: this.state.productListArray.concat(_obj)
        })
    }
    calculateTotal(price){
        price = price * 1;
        this.setState({total: this.state.total + price});
    }
    showProduct(_name){
        console.log(_name);
    }
    render(){
        let products = this.state.productListArray.map((product, key)=><Product 
        name={product.name} price={product.price} handleShow={this.showProduct}
        handleTotal={this.calculateTotal} key={key}
        />);
        return(
            <div>
                <ProductForm handleCreateNewProduct = {this.createNewProduct}/>
                {products}
                <Total value={this.state.total}/>
            </div>
        );
    }
}

export default ProductList;