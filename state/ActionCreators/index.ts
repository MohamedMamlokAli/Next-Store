import { ActionTypes } from '../ActionType';
import { ProductData } from '../../pages';
import { Dispatch } from 'redux';
import { AddProductsAction, CartActions, UserActions } from '../Actions';
import { ProductDataWithAmount } from '../reducers/cartReducer';

export const addProducts = (products: ProductData[]) => {
  return (dispatch: Dispatch<AddProductsAction>) => {
    dispatch({
      type: ActionTypes.ADD_PRODUCTS,
      payload: products,
    });
  };
};
export const addProductToCart = (product: ProductDataWithAmount) => {
  return (dispatch: Dispatch<CartActions>) => {
    dispatch({
      type: ActionTypes.SEND_PRODUCT_TO_CART,
      payload: product,
    });
  };
};
export const removeProductfromCart = (number: number) => {
  return (dispatch: Dispatch<CartActions>) => {
    dispatch({
      type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
      payload: number,
    });
  };
};

export const setUser = (user: string | null) => {
  return (dispatch: Dispatch<UserActions>) => {
    dispatch({
      type: ActionTypes.SET_USER,
      payload: user,
    });
  };
};
export const getUserCart = (products: ProductDataWithAmount[]) => {
  return (dispatch: Dispatch<UserActions>) => {
    dispatch({
      type: ActionTypes.GET_USER_CART,
      payload: products,
    });
  };
};
