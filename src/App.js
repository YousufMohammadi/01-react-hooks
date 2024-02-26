import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { UseState } from "./Pages/UseState";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/useState" element={<UseState />} />
      </Routes>
    </Router>
  );
}

export default App;
