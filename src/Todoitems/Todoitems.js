import React from "react";

const Todoitems = (props) => {
  return (
    <div className="todoItems" key={props.id}>
      <ul>
        <li>
          {/* <input type="checkbox" /> */}
          {props.todo}
          <p className="removeItem" onClick={props.remove}>
            &times;
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Todoitems;
