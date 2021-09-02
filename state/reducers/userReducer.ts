import { UserActions } from '../Actions';
import { ActionTypes } from '../ActionType';
import { ProductDataWithAmount } from './cartReducer';
type UserStateTypes = {
  user: string | null;
  userCart: ProductDataWithAmount[];
};
const initialState: UserStateTypes = {
  user: null,
  userCart: [],
};

const userReducer = (state = initialState, action: UserActions) => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return {
        user: action.payload,
        userCart: state.userCart,
      };

    case ActionTypes.GET_USER_CART:
      return {
        user: state.user,
        userCart: [...action.payload],
      };

    default:
      return state;
  }
};
export default userReducer;
