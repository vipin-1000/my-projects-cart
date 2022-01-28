export const saveState = (state) => {
    try {
      const serialState = JSON.stringify(state.cart);
      localStorage.setItem('miniCartState', serialState);
    } catch(err) {
        console.log(err);
    }
};

export const loadState = () => {
    try {
      const serialState = localStorage.getItem('miniCartState');
      if (serialState === null) {
        return undefined;
      }
      return JSON.parse(serialState);
    } catch (err) {
      return undefined;
    }
};
export const getTotalMoneyProducts =(products)=>{
  return products.length > 1 ? products.reduce((preProd,lastProd)=>preProd.count*preProd.price+lastProd.count*lastProd.price): products[0] ? products[0].count*products[0].price : 0
}
export const getTotalItem = (products)=>{
  return products.length > 1 ? products.reduce((preProd,lastProd)=>preProd.count+lastProd.count): products[0] ? products[0].count : 0
}

export const handleFunWithKey=(event,callback)=>{
  if (event && event.key && (event.key === 'Enter' || event.key === ' ')) {
     callback();
 }
}
