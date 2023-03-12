import { initializeState } from "./initializeState";

//To Do Filter Reducer
const ToDoFilterReducer = (state = initializeState, { type, payload }) => {
  switch (type) {
    case "":
      return state;
    default:
      return state;
  }
};

//export
export default ToDoFilterReducer;
