import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Settings from "./Settings/Settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
