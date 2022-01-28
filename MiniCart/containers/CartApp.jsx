import React from 'react';
import styled from "styled-components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {getProduct, updateCounter, removeProduct} from "./../actions/"
import Cart from "./../components/Cart";
import Header from "./../components/Header";



const Container = styled.div`
  position: relative;
  font-family: "sans-serif";
`;

class CartApp extends React.PureComponent{
  constructor(props){
    super(props);
    this.updateCounter = this.updateCounter.bind(this)
    this.removeProduct = this.removeProduct.bind(this);
  }
  updateCounter(counter, productId){
    const {action} = this.props;
    action.updateCounter(counter, productId)
  }
  componentDidMount(){
    const {products, action} = this.props;
    products && products.length<1 && action.getProduct();
  }
  removeProduct(productId){
    this.props.action.removeProduct(productId)
  }
  render(){
    const {products} = this.props;
    return (
      <Container>
        <Header products={products} removeProduct={this.removeProduct}/>
        {products && products.length ? <Cart products = {products} updateCounter={this.updateCounter}/>:""}
      </Container>
    );
  }
}
const mapStateToProps = state =>{
  const {cart} = state;
  const {products} = cart
  return {
    products
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    action: bindActionCreators(
      {
        getProduct,
        updateCounter,
        removeProduct
      },
      dispatch
    )
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(CartApp)
