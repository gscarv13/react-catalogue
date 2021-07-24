import { CURRENT_FIAT } from '../actions/types';

const initialState = {};

const currentFiatReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_FIAT:
      return {
        currentFiat: action.payload,
      };
    default:
      return state;
  }
};

export default currentFiatReducer;
