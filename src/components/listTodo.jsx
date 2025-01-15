import React, { useState } from "react";
import { LuPencil } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodo, toggleTodo } from "../features/todo/todoSlice";

const ListTodo = () => {
  const todoList = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const [editTodoId, setEditTodoId] = useState(null);
  const [editTodoContent, setEditTodoContent] = useState("");

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleEditTodo = (id) => {
    if (editTodoId === id) {
      dispatch(editTodo({ id, content: editTodoContent }));
      setEditTodoId(null);
      setEditTodoContent("");
    } else {
      setEditTodoId(id);
      const currentTodo = todoList.find((todo) => todo.id === id);
      setEditTodoContent(currentTodo.content);
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <ul>
        {todoList &&
          todoList.length > 0 &&
          todoList.map((todo) => (
            <li key={todo.id} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {editTodoId === todo.id ? (
                <input
                  value={editTodoContent}
                  onChange={(e) => setEditTodoContent(e.target.value)}
                  placeholder="Edit your todo..."
                />
              ) : (
                <span
                  style={{
                    textDecoration: todo.complete ? "line-through" : "none",
                  }}
                >
                  {todo.content}
                </span>
              )}
              <button onClick={() => handleToggleTodo(todo.id)}>
                <SiTicktick />
              </button>
              <button onClick={() => handleEditTodo(todo.id)}>
                {editTodoId === todo.id ? "Save" : <LuPencil />}
              </button>
              <button onClick={() => handleDeleteTodo(todo.id)}>
                <MdDeleteOutline />
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ListTodo;
