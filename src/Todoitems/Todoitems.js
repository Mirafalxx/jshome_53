import React from "react";

const Todoitems = (props) => {
  // const todoEntries = props.entreis;
  // const createTasks = (item) => {
  //   return <li key={item.key}>{item.text}</li>;
  // };

  return (
    <div>
      <ul>
        {props.todoEntries.map((item) => {
          return (
            <li key={item.id} onClick={() => console.log("123")}>
              {item.todo}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todoitems;
