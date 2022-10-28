import "./App.css";
import MyError from "./MyError";
import Home from "./Home";
import Users from "./Users";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/users" element={<Users />} />
        <Route exact path="*" element={<MyError />} />
      </Routes>
    </Router>
  );
}

export default App;
