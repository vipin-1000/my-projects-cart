import React from 'react';
import styled from "styled-components";
import Tile from "./Tile"



const CartContainer = styled.div``;
const CartList = styled.ul`
  margin: 0;
  padding: 20px 35px;
  box-sizing: border-box;
  list-style: none;
`;
const Cart = ({products, updateCounter}) => {
  return (
    <CartContainer>
      <CartList>
        {products.map((product, index) => {
          return (
            <Tile product={product} updateCounter={updateCounter} key={product.id}/>
          );
        })}
      </CartList>
    </CartContainer>
  );
};
export default Cart;
