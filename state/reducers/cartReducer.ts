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
  ProductsInCart: [
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      amount: 1,
    },
    {
      id: 2,
      title: 'Mens Casual Premium Slim Fit T-Shirts ',
      price: 22.3,
      description:
        'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
      category: "men's clothing",
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
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
          const acc = prev + nextProductPrice;
          return acc;
        }, 0);
        return {
          ...state,
          TotalPrice: totalPrice,
          ProductsInCart: [...CartWithoutTheProduct, productAfterUpdate],
        };
      } else {
        console.log('Product IS NOT  THERE');
        const newCart = [...state.ProductsInCart, currentProductToAdd];
        const totalPrice = newCart.reduce((prev, next) => {
          const nextProductPrice = next.amount * next.price;
          const acc = prev + nextProductPrice;
          return acc;
        }, 0);

        return {
          TotalPrice: totalPrice,
          ProductsInCart: [...newCart],
        };
      }
    case ActionTypes.REMOVE_PRODUCT_FROM_CART:

    default:
      return state;
  }
};
export default cartReducer;
