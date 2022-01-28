import * as ActionTypes from "../actions/actionTypes";
import {loadState} from "../utils/utils"

const initialState = {
  products:loadState() ? loadState().products : []
};


const cart = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PRODUCT_DATA_SUCCESS:
      const products = action.payload.map((product)=>{
        return {
          ...product,
          count: 1
        }
      })
      return {
        ...state,
        products: products
      };
    case ActionTypes.UPDATE_COUNTER:
    const {counter, productId } = action.payload
    const {products: data} = state ;
    var updateProducts =  data.map((product)=>{
      if(product.id === productId){
        product.count =  counter
      }
      return {
        ...product
      }
    })
    return {
      ...state,
      products: updateProducts
    }
    case ActionTypes.REMOVE_PRODUCT:
    const id = action.payload;
    const {products: dataa} = state ;
    var updateProducts =  dataa.filter((product)=>{
      return product.id !== id
    })

    return {
      ...state,
      products: updateProducts
    }
    break
    default:
      return state;
  }
};
export default {
  cart
};
