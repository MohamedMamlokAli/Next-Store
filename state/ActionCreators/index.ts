import { ActionTypes } from '../ActionType';
import { ProductData } from '../../pages';
import { Dispatch } from 'redux';
import { AddProductsAction } from '../Actions';

export const addProducts = (products: ProductData[]) => {
  return (dispatch: Dispatch<AddProductsAction>) => {
    dispatch({
      type: ActionTypes.ADD_PRODUCTS,
      payload: products,
    });
  };
};
