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

type SetUser = {
  type: ActionTypes.SET_USER;
  payload: string | null;
};
type GetUserCart = {
  type: ActionTypes.GET_USER_CART;
  payload: ProductDataWithAmount[];
};

export type CartActions = AddProductToCartAction | RemoveProductToCartAction;
export type UserActions = SetUser | GetUserCart;
