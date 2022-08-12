export const actionUpdateMoney = (money) => {
  return {
    type: 'add_money',
    payload: money,
  };
};

export const actionSetInitMoney = (initMoney) => {
  return {
    type: 'set_init_money',
    payload: initMoney,
  };
};

export const actionSetFare = (fare, fareState) => {
  return {
    type: 'set_fare',
    payload: { fare, fareState },
  };
};
