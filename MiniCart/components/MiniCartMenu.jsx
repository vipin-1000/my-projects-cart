import React from 'react';
import styled from "styled-components";
import { useState,useEffect,useRef } from "react";
import {getTotalMoneyProducts,getTotalItem,handleFunWithKey} from "./../utils/utils"
import MiniCartPopup from "./MiniCartPopup";


const Menu = styled.div`
  display: flex;
  height: 100%;
  align-items: start;
  justify-content: center;
  width: auto;
  flex-flow: column;
  padding: 10px 20px;
`;


const TotalItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
cursor: ${props=> props.ispointer? "pointer": "none"}
`;

const DropIcon = styled.span`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid black;
  margin-left: 10px;
  cursor: pointer;
`;

const MiniCartMenu = (props)=>{
  const {products, removeProduct} = props;
  const [show,setVisible] = useState(false)
  const currency = products.length && products[0].currency || "$";
  const total = getTotalMoneyProducts(products);
  const totalItem = getTotalItem(products)

  const chnageVisibility = () => {
    var value = !show;
    setVisible(value);
  }

  useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
          document.removeEventListener('click', handleClickOutside, true);
        };
    },[]);

    const dropEl = useRef(null);
    //const btnref = useRef(null);
    const handleClickOutside = (event) =>{
        if (dropEl && !dropEl.current.parentElement.parentElement.parentElement.contains(event.target)) {
          setVisible(false);
        }
    }

    const handlekeyDownEvent = (event)=>{
      handleFunWithKey(event,chnageVisibility)
    }
    //let { buttonProps,isPressed } = useButton(props, dropEl);
    //console.log(buttonProps);
  return (
    <>
    <Menu >
    <span>{currency}{total}</span>
    <TotalItem ispointer={totalItem} role="button" tabIndex="0" onClick={chnageVisibility} onKeyDown={handlekeyDownEvent} >{totalItem} Items {products.length ? <DropIcon aria-describedby="" ref={dropEl}></DropIcon>:""} </TotalItem>
    </Menu>
    {
      show && products.length ? <MiniCartPopup products={products} removeProduct={removeProduct}/> :""
    }
    </>
  )
}
export default MiniCartMenu
