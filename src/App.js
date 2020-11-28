import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { Home } from "./views";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
