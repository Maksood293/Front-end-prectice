import { useEffect, useState } from "react";
import { useStore } from "./store";
import axios from "axios";

function Todos() {
  const { state, dispatch } = useStore();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    getTodo();
  }, []);
  useEffect(() => {
    search();
  }, [inputValue]);

  console.log(state, "state");
  const handleChange = (e) => {
    setInputValue(e.target.value);
    dispatch({ type: "Filter_Todo", payload: e.target.value });
  };
  function search() {
    state.todo.filter((item) => item.title.indexOf(inputValue) > -1);
  }
  console.log(inputValue, "state");
  const getTodo = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    if (result.status === 200) {
      dispatch({ type: "Add_Todos", payload: result.data });
    }
  };
  return (
    <>
      <form
        style={{
          width: "100%",
          height: "50px",
          background: "grey",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <input
          type="text"
          placeholder="Search todos..."
          style={{ width: "100%" }}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {state.todo
          ? state.todo
              .slice(0, 25)
              .map((item) => <h1 key={item.id}>{item.title}</h1>)
          : null}
      </div>
    </>
  );
}

export default Todos;
