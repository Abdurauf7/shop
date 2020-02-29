const trouser = (state = [], action) => {
  switch (action.type) {
    case "ADD_NEW_TROUSER":
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

export default trouser;
