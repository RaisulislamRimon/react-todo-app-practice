import React from "react";

const Todo = (props) => {
  const { id, title, desc } = props.todo;
  const handleDelete = (title) => {
    // console.log(title);
    props.onRemoveTodo(title);
  };
  return (
    <div
      style={{
        border: "1px solid green",
        borderRadius: "10px",
        padding: "20px",
        margin: "10px",
        width: "300px",
      }}
    >
      <div>
        <h1>Todo id : {id}</h1>
        <p>{title}</p>
        <p>{desc}</p>
      </div>
      <div>
        <button
          onClick={() => {
            handleDelete(title);
          }}
          className="btn btn-outline-danger border border-none"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
