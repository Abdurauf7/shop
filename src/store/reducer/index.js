import { combineReducers } from "redux";

import dress from "./dress";
import trousers from "./trousers";
import shoes from "./shoes";

const customReducers = combineReducers({
  dress,
  trousers,
  shoes
});

export default customReducers;
