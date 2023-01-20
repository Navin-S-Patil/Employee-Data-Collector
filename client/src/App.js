import "./App.css";
import EmployeeEntry from "./components/EmployeeEntry";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import ShowData from "./components/ShowData";
import SearchData from "./components/SearchData";

function App() {
  return (
    <div className="App">
      {/* <EmployeeEntry /> */}
      <Routes>
        <Route path="/" element={<EmployeeEntry />} />
        <Route path="/showData" element={<ShowData />} />
        <Route path="/searchData" element={<SearchData />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
