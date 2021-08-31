import { ProductData } from '../../pages';
import { CartActions } from '../Actions';
import { ActionTypes } from '../ActionType';

export interface ProductDataWithAmount extends ProductData {
  amount: number;
}
type CartStateType = {
  TotalPrice: number;
  ProductsInCart: ProductDataWithAmount[];
};
const initialCartState: CartStateType = {
  TotalPrice: 0,
  ProductsInCart: [],
};
const cartReducer = (state = initialCartState, action: CartActions) => {
  switch (action.type) {
    case ActionTypes.SEND_PRODUCT_TO_CART:
      const currentProductToAdd = action.payload;
      const CheckIfProductInCart = state.ProductsInCart.filter(
        (product) => product.id == currentProductToAdd.id
      );
      if (CheckIfProductInCart.length > 0) {
        const CartWithoutTheProduct = state.ProductsInCart.filter(
          (product) => product.id !== currentProductToAdd.id
        );
        const productAfterUpdate: ProductDataWithAmount = {
          id: currentProductToAdd.id,
          category: currentProductToAdd.category,
          description: currentProductToAdd.description,
          image: currentProductToAdd.image,
          title: currentProductToAdd.title,
          price: currentProductToAdd.price,
          amount: currentProductToAdd.amount + CheckIfProductInCart[0].amount,
        };
        const productsInCartAfterUpdate = [
          ...CartWithoutTheProduct,
          productAfterUpdate,
        ];
        const totalPrice = productsInCartAfterUpdate.reduce((prev, next) => {
          const nextProductPrice = next.amount * next.price;
          const accumulator = prev + nextProductPrice;
          return accumulator;
        }, 0);
        return {
          ...state,
          TotalPrice: totalPrice,
          ProductsInCart: [...CartWithoutTheProduct, productAfterUpdate],
        };
      } else {
        const newCart = [...state.ProductsInCart, currentProductToAdd];
        const totalPrice = newCart.reduce((prev, next) => {
          const nextProductPrice = next.amount * next.price;
          const accumulator = prev + nextProductPrice;
          return accumulator;
        }, 0);

        return {
          TotalPrice: totalPrice,
          ProductsInCart: [...newCart],
        };
      }
    case ActionTypes.REMOVE_PRODUCT_FROM_CART:
      const idOfTheProduct = action.payload;
      const cartWithoutTheremovedProduct = state.ProductsInCart.filter(
        (product) => product.id !== idOfTheProduct
      );
      const totalPrice = cartWithoutTheremovedProduct.reduce((prev, next) => {
        const nextProductPrice = next.amount * next.price;
        const accumulator = prev + nextProductPrice;
        return accumulator;
      }, 0);
      return {
        TotalPrice: totalPrice,
        ProductsInCart: [...cartWithoutTheremovedProduct],
      };
    default:
      return state;
  }
};
export default cartReducer;
