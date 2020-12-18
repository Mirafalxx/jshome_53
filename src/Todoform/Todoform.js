import React, { useState } from "react";
import Todoitems from "../Todoitems/Todoitems";

const Todoform = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [showTodoList, setShowTodoList] = useState(false);

  const addNewTask = (e) => {
    e.preventDefault();
    if (todo) {
      const item = { id: new Date().getTime().toString(), todo };
      setTodoList((todoList) => {
        return [...todoList, item];
      });
      setShowTodoList(true)
      setTodo("");
      // console.log(todoList);
    } else alert("Please enter value");
  };

  const removeItem = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
    // console.log('123');
  };

  return (
    <>
      <div className="todo" onSubmit={addNewTask}>
        <form className="todoForm">
          <input
            type="text"
            placeholder="Add new task"
            value={todo}
            name="todo"
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="btn addTask">Add</button>
        </form>
      </div>



      {todoList.map((todoItem) => {
        const { id, todo } = todoItem;
        return (
          <div className="test" key={id}>
            <Todoitems
              id={id}
              todo={todo}
              remove={() => removeItem(todoItem.id)}
            />
          </div>
        );
      })}



    </>
  );
};

export default Todoform;
