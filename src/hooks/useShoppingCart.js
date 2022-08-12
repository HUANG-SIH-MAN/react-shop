import React from 'react';

const initialState = {
  totalAmount: 0,
  fare: 0,
  fareState: '標準運送',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'set_init_money':
      return {
        ...state,
        totalAmount: action.payload,
      };
    case 'add_money':
      return {
        ...state,
        totalAmount: state.totalAmount + action.payload,
      };
    case 'set_fare':
      return {
        ...state,
        fare: action.payload.fare,
        fareState: action.payload.fareState,
      };
    default:
      return state;
  }
};

export default function useShoppingCart() {
  return React.useReducer(reducer, initialState);
}
