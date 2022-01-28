import React from "react";
import styled from "styled-components";
import MiniCartMenu from "./MiniCartMenu";

const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: right;
  box-sizzing: border-box;
  border-bottom: 6px solid #E1E0E4;
  background:#FBFAFF;
  color: #496572;
  box-sizing: border-box;
  padding: 0 20px;
`;

const PlaceHolder = styled.div``;

const Header=(props)=>{
  const {products, removeProduct} = props;
  return (
    <HeaderContainer >
      <MiniCartMenu products={products} removeProduct = {removeProduct}/>
      <PlaceHolder>N/A</PlaceHolder>
    </HeaderContainer>
  )
}

export default Header;
