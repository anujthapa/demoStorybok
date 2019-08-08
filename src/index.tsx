import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
// import main App component
import App from "./components/App";

// render App to DOM under div id="root"
ReactDOM.render( <App />, document.getElementById("root"));
