import CartActionTypes from './cart.types';

// Below are actions affecting NEW ITEMS:

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const updateProductData = (increment, productData) => ({
  type: CartActionTypes.UPDATE_PRODUCT_DATA,
  increment: increment,
  productData: productData,
});

export const setProductData = (product) => ({
  type: CartActionTypes.SET_PRODUCT_DATA,
  payload: product,
});

export const editCakeOptions = (optionValue, data) => ({
  type: CartActionTypes.EDIT_CAKE_OPTIONS,
  payload: optionValue,
  data: data,
});

export const editCakeMsg = (text) => ({
  type: CartActionTypes.EDIT_CAKE_MSG,
  payload: text,
});

export const clearAll = () => ({
  type: CartActionTypes.CLEAR_ALL,
});

//Below are actions related to CART:

export const saveNewItemToCart = () => ({
  type: CartActionTypes.SAVE_NEW_ITEM_TO_CART,
});

export const removeFromCart = (cartItem) => ({
  type: CartActionTypes.REMOVE_FROM_CART,
  payload: cartItem,
});

export const reduceQty = (cartItem) => ({
  type: CartActionTypes.REDUCE_QTY,
  payload: cartItem,
});

export const incrementQty = (cartItem) => ({
  type: CartActionTypes.INCREMENT_QTY,
  payload: cartItem,
});

//Below are actions related to ORDER DETAILS:

export const setPickupDate = (date) => ({
  type: CartActionTypes.SET_PICKUP_DATE,
  payload: date,
});

export const setOrderDetails = (input) => ({
  type: CartActionTypes.SET_ORDER_DETAILS,
  payload: input,
});

export const editOrderSelection = (optionValue) => ({
  type: CartActionTypes.EDIT_ORDER_SELECTION,
  payload: optionValue,
});

export const clearOrderDetails = () => ({
  type: CartActionTypes.CLEAR_ORDER_DETAILS,
});

export const clearAfterSubmit = () => ({
  type: CartActionTypes.CLEAR_AFTER_SUBMIT,
});
