import React from "react";
import Todo from "../Todo/Todo";
import "./Todos.css";

const Todos = (props) => {
  const { todos } = props;
  // console.log(props);
  return (
    <section className="todos-container">
      {todos.map((todo) => (
        <Todo
          key={todo.title}
          todo={todo.todo}
          onRemoveTodo={props.onRemoveTodo}
        />
      ))}
    </section>
  );
};

export default Todos;
