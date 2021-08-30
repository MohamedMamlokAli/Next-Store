import { ProductData } from '../../pages';
import { ActionTypes } from '../ActionType';
import { ProductDataWithAmount } from '../reducers/cartReducer';
export type AddProductsAction = {
  type: ActionTypes.ADD_PRODUCTS;
  payload: ProductData[];
};

type AddProductToCartAction = {
  type: ActionTypes.SEND_PRODUCT_TO_CART;
  payload: ProductDataWithAmount;
};
type RemoveProductToCartAction = {
  type: ActionTypes.REMOVE_PRODUCT_FROM_CART;
  payload: number;
};
export type CartActions = AddProductToCartAction | RemoveProductToCartAction;
