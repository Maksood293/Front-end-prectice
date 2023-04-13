import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import StoreContext from "./store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <StoreContext>
      <App />
    </StoreContext>
  </StrictMode>
);
