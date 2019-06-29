import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Index } from "./components/Index/Index";
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
      </div>
    </Router>
  );
}

export default App;
