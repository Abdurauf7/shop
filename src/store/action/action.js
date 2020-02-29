let nextId = 0;

export const addItem = item => {
  return {
    type: "ADD_NEW_CLOTH",
    id: nextId++,
    item: item
  };
};

export const addShoes = item => {
  return {
    type: "ADD_NEW_SHOES",
    id: nextId++,
    item: item
  };
};

export const addTrouser = item => {
  return {
    type: "ADD_NEW_TROUSER",
    id: nextId++,
    item: item
  };
};
