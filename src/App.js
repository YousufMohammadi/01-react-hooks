import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { UseState } from "./Pages/UseState";
import { UseEffect } from "./Pages/UseEffect";
import { UseContext } from "./Pages/UseContext";
import { UseReducer } from "./Pages/UseReducer";
import { UseCallBack } from "./Pages/UseCallBack";
// import { UseMemo } from "./Pages/UseMemo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/useState" element={<UseState />} />
        <Route path="/useEffect" element={<UseEffect />} />
        <Route path="/useContext" element={<UseContext /> } />
        <Route path="/useReducer" element={<UseReducer /> } />
        <Route path="/useCallBack" element={<UseCallBack /> } />
        {/* <Route path="/useMemo" element={<UseMemo /> } /> */}
      </Routes>
    </Router>
  );
}

export default App;
