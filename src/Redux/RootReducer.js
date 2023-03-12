import { combineReducers } from "redux";
import ToDoReducer from "./ToDo/ToDoReducer";
import ToDoFilterReducer from "./ToDoFilter/ToDoFilterReducer";
//Root Reducer
const RootReducer = combineReducers({
  todo: ToDoReducer,
  todofilter: ToDoFilterReducer,
});

//export
export default RootReducer;
