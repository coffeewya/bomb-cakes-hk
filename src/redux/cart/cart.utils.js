
export const getOptionType = (id, data) => {
  const catCode = Math.floor(id / 100) * 100;
  if (catCode < 999)
    return data.productOptions.find((option) => Number(option.optId) === catCode);
  else return data.orderDetails.find((option) => Number(option.optId) === catCode);
};

// export const getOptionCode = (id) => {
//   const catCode = Math.floor(id / 100) * 100;
//   if (catCode < 999)
//     return PRODUCT_OPTIONS.find((option) => option.id === catCode).optionCode;
//   else return ORDER_DETAILS.find((option) => option.id === catCode).optionCode;
// };

export const newSelectedOptions = (currentValues, max, name) => {
  let newValues = [...currentValues];
  if (newValues.includes(name)) {
    return newValues.filter((value) => value !== name);
  } else {
    newValues.push(name);
    if (newValues.length > max) {
      newValues.splice(0, 1);
    }
    return newValues;
  }
};

export const findCostbyOptionValueName = (optionValues, valueToBeDeleted) => {
  let minusCost = 0;
  optionValues.forEach((optionValue) => {
    if (optionValue.name === valueToBeDeleted) {
      minusCost = optionValue.extraCost;
      console.log(minusCost);
    }
  });
  return minusCost;
};

export const loadProductData = (currentProductId, increment, productData) => {
  const len = productData.length; // i.e. 3
  //currentProductId is id gen by strapi (1,2,3...), non-sequential
  const currentProductIndex = productData.indexOf(productData.find(product=> product.id === currentProductId)); 
  const newProductIndex = currentProductIndex + increment; 
  if (newProductIndex >= len) {
    return productData[0];
  } else if (newProductIndex < 0) {
    return productData[len - 1];
  } else return productData[newProductIndex];
};

// export const loadProductData = (currentProductId, increment) => {
//   const len = PRODUCT_DATA.length;
//   const newProductId = currentProductId + increment;
//   if (newProductId >= len) {
//     return PRODUCT_DATA[0];
//   } else if (newProductId < 0) {
//     return PRODUCT_DATA[len - 1];
//   } else return PRODUCT_DATA[newProductId];
// };

export const newCartItemsAfterRemoving = (cartItems, payload) => {
  return cartItems.filter((cartItem) => cartItem !== payload);
};

export const newCartItemsAfterIncrement = (cartItems, payload) => {
  return cartItems.map((cartItem) => {
    if (cartItem === payload) {
      return { ...cartItem, quantity: cartItem.quantity + 1 };
    } else {
      return cartItem;
    }
  });
};

export const newCartItemsAfterReduce = (cartItems, payload) => {
  if (payload.quantity <= 1) {
    return newCartItemsAfterRemoving(cartItems, payload);
  } else
    return cartItems.map((cartItem) => {
      if (cartItem === payload) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      } else {
        return cartItem;
      }
    });
};
