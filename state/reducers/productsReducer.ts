import { ProductData } from '../../pages';
import { AddProductsAction } from '../Actions';
import { ActionTypes } from '../ActionType';

const initialState = [
  {
    id: 0,
    title: '',
    price: 0,
    category: '',
    image: '',
  },
];
const productsReducer = (
  state: ProductData[] = initialState,
  action: AddProductsAction
) => {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCTS:
      return (state = action.payload);

    default:
      return state;
  }
};

export default productsReducer;
