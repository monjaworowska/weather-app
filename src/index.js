import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import WeatherApp from "./components/WeatherApp";

function App() {
  return <WeatherApp />;
}

ReactDOM.render(<App />, document.getElementById("root"));
