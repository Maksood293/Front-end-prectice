import { useRef, useState } from "react";
import HigerOrder from "./higherOrder";
import { useStore } from "./store";

function AddTodo() {
  const [todo, setTodo] = useState({
    title: "",
    dec: ""
  });
  const ref = useRef();
  const { state, dispatch } = useStore();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "Add_Item",
      payload: todo
    });
    setTodo((prev) => ({
      title: "",
      dec: ""
    }));
  }

  const handleChange = (e) => {
    ref.current.style.background = "red";
    const { name, value } = e.target;
    setTodo((prev) => ({ ...prev, [name]: value }));
  };
  console.log(todo, "todo");
  console.log(state);
  console.log(ref.current, "ref");
  return (
    <>
      <h1>
        Todo's : {state.item.length ? state.item.length : "Please add todo"}
      </h1>
      <br />
      <br />
      {state.item.length
        ? state.item.map((item, index) => (
            <div key={index} style={{ display: "flex" }}>
              <h2>{item.title}</h2>
              <p>{item.dec}</p>
              <button
                onClick={() =>
                  dispatch({ type: "Delete_Item", payload: index })
                }
              >
                delete
              </button>
            </div>
          ))
        : null}
      <HigerOrder>
        <form
          onSubmit={handleSubmit}
          style={{ border: "1px solid black", padding: "10px", width: "300px" }}
        >
          <div>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              placeholder="please add title"
              onChange={handleChange}
              ref={ref}
            />
          </div>
          <br />
          <div>
            <label htmlFor="dec">Desp</label>
            <input
              id="dec"
              name="dec"
              placeholder="please add title"
              onChange={handleChange}
            />
          </div>
          <br />
          <div>
            <button type="submit">Add Todo</button>
          </div>
        </form>
      </HigerOrder>
    </>
  );
}

export default AddTodo;
