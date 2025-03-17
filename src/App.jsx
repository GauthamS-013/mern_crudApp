import "./App.css";
import Dashboard from "./Pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dash" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
