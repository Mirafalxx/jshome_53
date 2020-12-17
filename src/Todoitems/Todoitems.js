import React from "react";

const Todoitems = (props) => {

  return (
    <div className='todoItems'>
      <ul>
        <li key={props.id} >
          {props.todo}
          <p className='removeItem' onClick={props.remove}>&times;</p>
        </li>
      </ul>
    </div>
  );
};

export default Todoitems;
