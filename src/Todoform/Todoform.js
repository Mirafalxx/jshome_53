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
      console.log(todoList);
    } else alert("Please enter value");
  };


  const removeItem = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
    // console.log('123');
  }

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
      {todoList.map((todoItem) => {
        const { id, todo } = todoItem;
        return (
          <div className='test'>
            <Todoitems id={id} todo={todo} remove={() => removeItem(todoItem.id)} />
          </div>
        )
      })}
      {/* <Todoitems todoEntries={todoList} remove={() => removeItem(todoList.id)} /> */}
    </>
  );
};

export default Todoform;
