import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ListsState from "./context/listsContext/ListsState";
import FormDisplayState from "./context/formDisplayContext/FormDisplayState";

ReactDOM.render(
  <React.StrictMode>
    <FormDisplayState>
      <ListsState>
        <App />
      </ListsState>
    </FormDisplayState>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
