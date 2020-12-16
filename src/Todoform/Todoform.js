import React, { useState } from "react";
import Todoitems from "../Todoitems/Todoitems";

const Todoform = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addNewTask = (e) => {
    e.preventDefault();
    if (todo) {
      const item = { id: new Date().getTime().toString(), todo };
      setTodoList((todoList) => {
        return [...todoList, item];
      });
      setTodo("");
    } else alert("Please enter value");
  };
  return (
    <>
      <div className="todoForm" onSubmit={addNewTask}>
        <form>
          <input
            type="text"
            placeholder="Add new task"
            value={todo}
            name="todo"
            onChange={(e) => setTodo(e.target.value)}
          />
          <button>Add</button>
        </form>
      </div>
      <Todoitems todoEntries={todoList} />
    </>
  );
};

export default Todoform;
