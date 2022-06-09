export default (state = {}, action) => {
  const { name, brand, color, size, price, items, id } = action;
  switch (action.type) {
  case 'ADD_MERCH':
    return Object.assign({}, state, {
      [id]: {
        name: name,
        brand: brand,
        color: color,
        size: size,
        price: price, 
        items: items,
        id: id
      }
    });
  case 'DELETE_MERCH':
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};

// case 'DELETE_TICKET':
//   let newState = { ...state };
//   delete newState[id];
//   return newState;