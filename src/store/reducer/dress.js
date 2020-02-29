const dress = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_NEW_CLOTH":
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

export default dress;
