import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { useState } from "react";
import Home from "./component/sample/Home";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
