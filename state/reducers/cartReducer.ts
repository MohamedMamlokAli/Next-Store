import { ProductData } from '../../pages';
import { CartActions } from '../Actions';
import { ActionTypes } from '../ActionType';

export interface ProductDataWithAmount extends ProductData {
  amount: number;
}
type StateType = {
  TotalPrice: number;
  ProductsInCart: ProductDataWithAmount[];
};
const initialCartState: StateType = {
  TotalPrice: 0,
  ProductsInCart: [
    {
      id: 2,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      amount: 1,
    },
  ],
};
const cartReducer = (state = initialCartState, action: CartActions) => {
  switch (action.type) {
    case ActionTypes.SEND_PRODUCT_TO_CART:
      const currentProductToAdd = action.payload;
      const CheckIfProductInCart = state.ProductsInCart.filter(
        (product) => product.id == currentProductToAdd.id
      );
      if (CheckIfProductInCart.length > 0) {
        console.log('Product IS ALREADY THERE');
        console.log(currentProductToAdd);
        console.log(CheckIfProductInCart);
      } else {
        console.log('Product IS NOT  THERE');
      }
      return state;
    case ActionTypes.REMOVE_PRODUCT_FROM_CART:

    default:
      return state;
  }
};
export default cartReducer;
