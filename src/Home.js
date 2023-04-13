import { useStore } from "./store";
import { Link } from "react-router-dom";
import "./styles.css";

function Home() {
  const { state, dispatch } = useStore();
  return (
    <div className="App">
      <h1 style={{ background: `${state.color}` }}>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => dispatch({ type: "Update", payload: "red" })}>
        Change
      </button>
      <br />
      <br />
      <Link to="/todo">Go to Todo</Link>
    </div>
  );
}

export default Home;
