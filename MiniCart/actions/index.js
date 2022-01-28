import * as ActionTypes from "./actionTypes";
import { getProductData } from "../services";

const fetchProductStart = () => ({
  type: ActionTypes.FETCH_PRODUCT_DATA
});

const productSuccess = data => ({
  type: ActionTypes.FETCH_PRODUCT_DATA_SUCCESS,
  payload: data
});

const productError = data => ({
  type: ActionTypes.FETCH_PRODUCT_DATA_ERROR,
  payload: data
});

export const updateCounter = (counter, productId) => ({
type: ActionTypes.UPDATE_COUNTER,
payload: {
  productId,
  counter
}
})

export const removeProduct =(productId)=>({
  type: ActionTypes.REMOVE_PRODUCT,
  payload: productId
})

export const getProduct = () => dispatch => {
  dispatch(fetchProductStart());
  getProductData()
  .then((res)=>{
    //console.log(res.products)
    if(res && res.products){
    //  setProducts(res.products)
    return dispatch(productSuccess(res.products))
  }else{
    return dispatch(productSuccess([]))
  }
  })
  .catch((err)=>{
    return dispatch(productError(err))
  })
};
