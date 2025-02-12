import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { store } from "./redux/store";
import Routes from "./AppRoutes";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
