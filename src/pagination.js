import axios from "axios";
import React, { useState, useEffect } from "react";

function Pagination() {
  const [todos, setTodos] = useState([]);
  const [todosPerPage, setTodosPerPage] = useState(10);
  const [currentPage, settCurrentPage] = useState(1);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((data) => setTodos(data.data));
  }, []);

  const numOfTotalPage = Math.ceil(todos.length / todosPerPage);
  const pages = [...Array(numOfTotalPage + 1).keys()].slice(1);
  const indexOfLastTodo = currentPage * todosPerPage; //40
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage; //30
  const perPageData = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const handlePrev = () => {
    if (currentPage !== 1) settCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    if (currentPage !== pages) settCurrentPage(currentPage + 1);
  };

  console.log(perPageData, todos, indexOfLastTodo, currentPage, "todos");
  return (
    <div>
      <select onChange={(e) => setTodosPerPage(e.target.value)}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
      </select>
      {perPageData.map((todo) => (
        <p>{todo.title}</p>
      ))}
      <span onClick={handlePrev}>Previus</span>
      <p>
        {pages.map((page) => (
          <span
            keys={page}
            onClick={() => settCurrentPage(page)}
            className={currentPage === page ? "active" : null}
          >{`${page}  |  `}</span>
        ))}
      </p>
      <span onClick={handleNext}>Next</span>
    </div>
  );
}

export default Pagination;
