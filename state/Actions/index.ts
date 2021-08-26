import { ProductData } from '../../pages';
import { ActionTypes } from '../ActionType';
export type AddProductsAction = {
  type: ActionTypes.ADD_PRODUCTS;
  payload: ProductData[];
};
