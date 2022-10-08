import React, { useState } from "react";

const NewTodo = (props) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;
  const { onAddTodo } = props;

  const handleChange = (e) => {
    const name = e.target.name;
    setTodo((oldTodo) => {
      return {
        ...oldTodo,
        [name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    // console.log(todo);
    onAddTodo(todo);
    setTodo({ title: "", desc: "" });
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="px-40">
      <h1>NewTodo</h1>
      <div>
        <label htmlFor="title">Title : </label>
        <input
          onChange={handleChange}
          type="text"
          name="title"
          id="title"
          value={title}
          className="border border-primary"
        />
      </div>
      <div>
        <label htmlFor="desc">Description : </label> <br />
        <textarea
          onChange={handleChange}
          name="desc"
          id="desc"
          cols="50"
          rows="5"
          value={desc}
          className="border border-primary"
        ></textarea>
      </div>
      <button className="btn btn-primary ">Add Todo</button>
    </form>
  );
};

export default NewTodo;
