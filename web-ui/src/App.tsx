import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            {/* ... other links */}
          </ul>
        </nav>

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<About />} />
          {/* ... other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
