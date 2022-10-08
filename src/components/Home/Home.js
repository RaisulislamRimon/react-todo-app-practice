import React, { useState } from "react";
import NewTodo from "../NewTodo/NewTodo";
import Todos from "../Todos/Todos";

// const dummyTodos = [
//   {
//     id: 1,
//     title: "todo title 1",
//     desc: "todo1 description is here ...",
//   },
//   {
//     id: 2,
//     title: "todo title 2",
//     desc: "todo2 description is here ...",
//   },
//   {
//     id: 3,
//     title: "todo title 3",
//     desc: "todo3 description is here ...",
//   },
//   {
//     id: 4,
//     title: "todo title 4",
//     desc: "todo4 description is here ...",
//   },
//   {
//     id: 5,
//     title: "todo title 5",
//     desc: "todo5 description is here ...",
//   },
//   {
//     id: 6,
//     title: "todo title 6",
//     desc: "todo6 description is here ...",
//   },
//   {
//     id: 7,
//     title: "todo title 7",
//     desc: "todo7 description is here ...",
//   },
//   {
//     id: 8,
//     title: "todo title 8",
//     desc: "todo8 description is here ...",
//   },
//   {
//     id: 9,
//     title: "todo title 9",
//     desc: "todo9 description is here ...",
//   },
//   {
//     id: 10,
//     title: "todo title 10",
//     desc: "todo10 description is here ...",
//   },
// ];

const Home = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { todo }];
    });
  };

  const handleRemoveTodo = (title) => {
    /* alert(title);
    console.log(typeof title);
    console.log(parseInt(title));
    console.log(typeof title); */
    /*     const filteredTodo = todos.filter((todo) => Number(todo.title) !== title);
    console.log(filteredTodo);
    setTodos(filteredTodo); */
    setTodos((prevTodos) => {
      /* console.log(prevTodos);
      console.log(typeof prevTodos); */

      // now its work 
      const filteredTodo = prevTodos.filter((todo) => todo.todo.title !== title);
     /*  console.log(filteredTodo);
      console.log(typeof filteredTodo); */
      return filteredTodo;

      // working file on test 
      /* const filteredTodo = prevTodos.filter((todo) => console.log(todo.todo.title));
      console.log(filteredTodo);
      console.log(typeof filteredTodo);
      return filteredTodo; */
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={handleAddTodo} />
      {/* <Todos todos={dummyTodos} /> */}
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
};

export default Home;
