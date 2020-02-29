const shoes = (state = [], action) => {
  switch (action.type) {
    case "ADD_NEW_SHOES":
      return [
        ...state,
        {
          id: action.id,
          item: action.item
        }
      ];
      break;
    default:
      return state;
  }
};
export default shoes;
