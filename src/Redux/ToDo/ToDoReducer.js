import { initializeState } from "./initializeState";
import { ADDNEWTODO, COMPLETE, DELETE_TO_DO, GETTODO } from "./TodoActionType";

//To Do Reducer
const ToDoReducer = (state = initializeState, { type, payload }) => {
  switch (type) {
    case GETTODO:
      return (state = {
        ...state,
        todos: payload,
      });
    case ADDNEWTODO:
      return (state = {
        ...state,
        todos: [...state.todos, payload],
      });

    case DELETE_TO_DO:
      return (state = {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      });

    case COMPLETE:
      return (state = {
        ...state,
        todos: [...state.todos],
      });

    default:
      return state;
  }
};

//export
export default ToDoReducer;
