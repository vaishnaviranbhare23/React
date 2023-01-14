import { combineReducers } from "redux";
// import Ecommerce from "./product/reducer";
// import Wishlist from "./wishlist/reducer";
// import Cart from "./cart/reducer";
// import Filters from "./filter/reducer";
// import Todoapp from "./todo/todo.reducer";
// import ChatApp from "./chat-app/reducer";
// import EmailApp from "./email-app/reducer";
import Customizer from "./customizer/reducer";
import Stat from "./statistics/reducer";
import Auth from "./auth/reducer";
const reducers = combineReducers({
  // data: Ecommerce,
  // Wishlistdata: Wishlist,
  // Cartdata: Cart,
  // filters: Filters,
  // Todoapp,
  // ChatApp,
  // EmailApp,
  Customizer,
  Authdata: Auth,
  Statistics: Stat,
});

export default reducers;
