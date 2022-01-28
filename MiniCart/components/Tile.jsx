import React from 'react';
import styled from "styled-components";
import { useState, useRef } from "react";
import {handleFunWithKey} from "./../utils/utils"

const ItemListComponent = styled.li`
  display: flex;
  width: 100%;
  flex-flow: row;
  position: relative;
  color: black;
  align-items: center;
  padding: 20px 0;
  border-bottom: 3px solid #E2E1E6;
  color: #70858F;
 background: #FBFAFF;
margin-bottom: 10px;
`;

const ImageBlock = styled.div`
  height: 40px;
  flex-basis: 10%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-basis: 50%;
  flex-flow: column;
  align-items: start;
`;

const Price = styled.div`
  flex-basis: 20%;
  display: flex;
  justify-content: center;
`;
const Handle = styled.div`
  flex-basis: 20%;
  display: flex;
  justify-content: center;
`;
const Input = styled.input`
  width: 30px;
  margin-left: 5px;
  margin-right: 5px;
  border: 1px solid #CDD7DD !important;
  border-image: none;
  appearance: none;
  color: #C5D1D8;
  -webkit-appearance: none;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
  }
  &:focus {
       color: #C5D1D8;
       border-radius: 0;
       outline: none;
   }
`;

const ProductDesc = styled.span`
  color: #BDCBD2;
  font-size: 12px;
`

const Sign = styled.span`
  color: #A2B7BF;
  font-weight: bold;
  cursor:pointer;
`
const Tile = ({ product, updateCounter }) => {
  const {title="",desc="",image="",price,currency="$", id: productId,count:countValue=1} = product;
  const [count, setCount] = useState(countValue);
  const inputEl = useRef(null);

  const setCountValue = () => {
    if (!inputEl.current.value) {
      setCount("");
      updateCounter(0, productId)

    } else {
      if(parseInt(inputEl.current.value)<=0){
        updateCounter(parseInt(0), productId)
        setCount(parseInt(0));
      }else{
        updateCounter(parseInt(inputEl.current.value), productId)
        setCount(parseInt(inputEl.current.value));
      }

    }
  };

  const addCount = () => {
    let value = count + 1;
    updateCounter(value, productId)
    setCount(value);
  };

  const removeCount = () => {
    let value = count - 1;
    if (value >= 0) {
      updateCounter(value, productId)
      setCount(value);
    }
  };

  const handlekeyDownEventAdd=(event)=>{
   handleFunWithKey(event,addCount)

  }

  const handlekeyDownEventRemove=(event)=>{
    handleFunWithKey(event,removeCount)
  }

  return (
    <ItemListComponent  key={productId}>
      <ImageBlock>
        N/A
      </ImageBlock>
      <ProductDetails>
        <div>{title} </div>
        <ProductDesc>{desc}</ProductDesc>
      </ProductDetails>
      <Handle>
        <Sign tabIndex="0" onKeyDown= {handlekeyDownEventRemove} onClick={removeCount} role="button">-</Sign>
        <Input
          ref={inputEl}
          type="number"
          value={count}
          onChange={setCountValue}
        ></Input>
        <Sign tabIndex="0" onKeyDown= {handlekeyDownEventAdd} onClick={addCount} role="button">+</Sign>
      </Handle>
      <Price>{currency}{price*count}</Price>
    </ItemListComponent>
  );
};

export default Tile ;
