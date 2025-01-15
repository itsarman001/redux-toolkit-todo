import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    if (todoText.length > 0) dispatch(addTodo(todoText));
    setTodoText("")
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Todo..."
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
