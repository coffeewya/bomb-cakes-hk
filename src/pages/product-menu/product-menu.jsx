import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../../components/custom-button/custom-button';
import OptionSelector from '../../components/option-selector/option-selector';
import ErrorNotification, {
  errorCode,
} from '../../components/error-notification/error-notification';

import './product-menu.scss';
import {
  editCakeMsg,
  updateProductData,
  clearAll,
} from '../../redux/cart/cart.actions';
import {
  setCurrentPage,
  updateErrorMsgArr,
  clearErrorMsgArr,
} from '../../redux/display/display.actions';
import { saveNewItemToCart } from '../../redux/cart/cart.actions';
import {
  selectAmount,
  selectMessage,
  // selectProductData,
  selectSumExtraCost,
  selectNewItem,
} from '../../redux/cart/cart.selectors';
import { selectProductDataItems, selectProductOptions, selectProductOptionsError} from '../../redux/data/data.selectors';

const ProductMenu = ({
  updateProductData,
  editCakeMsg,
  setCurrentPage,
  clearAll,
  saveNewItemToCart,
  updateErrorMsgArr,
  clearErrorMsgArr,
  productDataItems, // state.data
  // amount,
  message,
  sumExtraCost,
  newItem,
  newItem : { productData: {title1, title2, desc, price, image}},
  productOptions,
  productOptionsError,
}) => {
  const errorMsgArr = () => {
    const arr = [];
    if (
      newItem.cakeSize.length < 1 ||
      newItem.design.length < 1 ||
      newItem.toppings.length < 1
    ) {
      arr.push(errorCode.PRODUCT_MENU_OPTIONS_REQUIRED);
    }
    return arr;
  };
  const handleChange = (event) => {
    editCakeMsg(event.target.value);
  };
  const total = price + sumExtraCost;

  const handleClickAddToCart = () => {
    const err = errorMsgArr();
    if (err.length <= 0) {
      clearErrorMsgArr();
      saveNewItemToCart();
      setCurrentPage('CHECKOUT');
    } else {
      updateErrorMsgArr(err);
    }
  };

  const optionsAndSummary = () => {
    if (!productOptionsError && productOptions.length > 0) {
      return (
        <div className='options-and-summary'>
          {productOptions.map((option, id) => (
            <OptionSelector productOption={option} key={id} />
          ))}
          <form className='product-order-form'>
            <label className='label'>Cake Message (optional): </label>
            <input
              type='text'
              id='cakemsg'
              name='cakeMessage'
              label='Cake Message'
              maxLength='30'
              className='cake-msg-input'
              value={message}
              onChange={handleChange}
            />
          </form>
          <p className='clear' onClick={() => clearAll()}>
            Clear Selection
          </p>
          <ErrorNotification />
          <div className='summary'>
            <div className='amount'>{`HK$ ${total}`}</div>
            <CustomButton
              buttonClassName='add-to-cart'
              style={{ marginRight: '10px' }}
              type='submit'
              onClick={() => {
                handleClickAddToCart();
              }}
            >
              {' '}
              Add to Cart{' '}
            </CustomButton>
          </div>
        </div>
    )} else return (
      <div>Shopping cart service is not available now. To order, please {' '}
        <a href='mailto:order@bombcakeshk.com' target='_blank' rel='noopener noreferrer'>contact us</a> {' '}
      by email.</div>);
  }

  return (
    <div className='container'>
      <span className='product-header'>
        <div className='title'>{title1 + ' ' + title2}</div>
        <div className='navigate-products'>
          <div
            className='prev-product'
            onClick={() => updateProductData(-1, productDataItems)}
          >
            &lt;&lt; Previous Product
          </div>
          <div className='divider'>&nbsp;|&nbsp;</div>
          <div
            className='next-product'
            onClick={() => updateProductData(1, productDataItems)}
          >
            Next Product &gt;&gt;
          </div>
        </div>
      </span>
      <div className='product-details'>
        <div
          className='product-img'
          style={{ backgroundImage: `url(${image.url})` }}
        ></div>
        <div className='product-options'>
          <p className='description'>
            {desc}
          </p>
          {optionsAndSummary()}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sumExtraCost: selectSumExtraCost,
  productDataItems: selectProductDataItems,
  amount: selectAmount,
  message: selectMessage,
  newItem: selectNewItem,
  productOptions: selectProductOptions,
  productOptionsError: selectProductOptionsError,
});

const mapDispatchToProps = (dispatch) => ({
  updateProductData: (increment, productData) =>
    dispatch(updateProductData(increment, productData)),
  editCakeMsg: (text) => dispatch(editCakeMsg(text)),
  setCurrentPage: (page) => dispatch(setCurrentPage(page)),
  clearAll: () => dispatch(clearAll()),
  saveNewItemToCart: () => dispatch(saveNewItemToCart()),
  updateErrorMsgArr: (err) => dispatch(updateErrorMsgArr(err)),
  clearErrorMsgArr: () => dispatch(clearErrorMsgArr()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductMenu);
