import { useDispatch, useSelector } from "react-redux";
import { deleteToDo, ToDoComplete } from "../Redux/ToDo/TodoAction";
import Todo from "./Todo";

export default function TodoList() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);

  // to do remove
  const handleToDoRemove = (id) => {
    dispatch(deleteToDo(id));
  };
  // change complete change
  const handleToDocomplete = (id) => {
    console.log(id);
  };
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos.map((todo, index) => {
        return (
          <Todo
            key={index}
            name={todo}
            handleToDoRemove={handleToDoRemove}
            handleToDocomplete={handleToDocomplete}
          />
        );
      })}
    </div>
  );
}
