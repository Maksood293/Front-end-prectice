import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTodo from "./addTodo";
import Home from "./Home";
import Todos from "./todos";
import Pagination from "./pagination";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todo" element={<AddTodo />} />
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/pagination" element={<Pagination />} />
      </Routes>
    </BrowserRouter>
  );
}
