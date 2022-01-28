import React from "react";
import styled from "styled-components";
import {handleFunWithKey} from "./../utils/utils"

const MiniCartPop = styled.div`
  position: absolute;
  width: calc( 100% - 10px);
  right: 5px;
  top: 136%;
  z-index: 2;
  box-shadow: 1px 3px 3px #35494d78;
  background: #B2D4DC;
  border-radius: 5px;
  box-sizing: border-box;
  :before{
    content: "";
      position: absolute;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-bottom: 20px solid #B2D4DC;
      top: -20px;
      right: 47px
  ;
  }
  > * {
       &:first-child {
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
       }
       &:last-child{
         border-bottom-left-radius: 5px;
         border-bottom-right-radius: 5px;
       }
     }

  `;

const MiniCartRow = styled.div`
  display: flex;
  background: #B2D4DC;
  padding: 20px 20px 20px 60px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  color: #577782;
  border-bottom: ${props=>props.showBorder? "1px solid #9EC0C8":""};
Line-height: 21px;
`;

const ProductBlock = styled.div`
  display: inline-flex;
  flex-flow: column;
`;
const TotalItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;

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


const Remove = styled.div`
  position: absolute;
  left: 20px;
  display: inline-block;
  margin-right: 20px;
  font-size: 28px;
  cursor:pointer;
  float: left;
  color: white;
  font-weight: bold;
  transform: rotate(45deg);

`;

const Qty = styled.div`
  display: inline-flex;
  font-size: 12px;
  font-weight: bold;
`;
const Price = styled.span`
  font-weight: bold;
`;


const MiniCartPopup = ({products, removeProduct})=>{
  //let { tabProps } = useTab({ key }, state, ref);
  return (
    <MiniCartPop>
      {products.map((product,index)=>{
        const {title , count, price, id: productId, currency}= product;
        const showBorder = products.length - (index+1);
        const removeProduct1 =()=>{
          removeProduct(productId)
        }
        const handlekeyDownEvent =(event)=>{
          handleFunWithKey(event,removeProduct1)
        }
        return (
          <MiniCartRow  showBorder={showBorder} key={productId}>
            <Remove onClick={removeProduct1} role="button" tabIndex="0" onKeyDown={handlekeyDownEvent}>+</Remove>
           <ProductBlock><span>{title}</span> <Price>${price*count}</Price></ProductBlock>
           <Qty>Qty {count}</Qty>
          </MiniCartRow>
        )
      })}
    </MiniCartPop>
  )
}

export default MiniCartPopup;
