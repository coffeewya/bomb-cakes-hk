import displayActionTypes from './display.types';

export const toggleOrderMode = () => ({
  type: displayActionTypes.TOGGLE_ORDER_MODE,
});

export const turnOffOrderMode = () => ({
  type: displayActionTypes.TURN_OFF_ORDER_MODE,
});

export const updateOptionOnHover = (value) => ({
  type: displayActionTypes.UPDATE_OPTION_ON_HOVER,
  payload: value,
});

export const setCurrentPage = (page) => ({
  type: displayActionTypes.SET_CURRENT_PAGE,
  payload: page,
});

export const updateErrorMsgArr = (arr) => ({
  type: displayActionTypes.UPDATE_ERROR_MSG_ARR,
  payload: arr,
});

export const clearErrorMsgArr = () => ({
  type: displayActionTypes.CLEAR_ERROR_MSG_ARR,
});
