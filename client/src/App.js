import './App.css';
import EmployeeEntry from './components/EmployeeEntry';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import ShwoData from './components/ShwoData';

function App() {
  return (
    <div className="App">
      {/* <EmployeeEntry /> */}
      <Routes>
        <Route path="/" element={<EmployeeEntry />} />
        <Route path="/showData" element={<ShwoData />} />
        
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>

    </div>
  );
}

export default App;
