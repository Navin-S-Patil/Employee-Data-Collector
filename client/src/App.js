import "./App.css";
import EmployeeEntry from "./components/EmployeeEntry";
import { Routes, Route, Navigate } from "react-router-dom";
import ShowData from "./components/ShowData";
import SearchData from "./components/SearchData";
import AdminLogin from "./components/AdminLogin";
import AdminRegister from "./components/AdminRegister";
import styled from "styled-components";

const Background = styled.div`
  ${'' /* background-color: rgba(153, 147, 147, 0.72); */}
  height: 100vh;
  background-image:  url("https://coolbackgrounds.io/images/backgrounds/index/ranger-4df6c1b6.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;

function App() {
  return (
    <div className="App">
      <Background>
        {/* <EmployeeEntry /> */}
        <Routes>
          <Route path="/" element={<EmployeeEntry />} />
          <Route path="/showData" element={<ShowData />} />
          <Route path="/searchData" element={<SearchData />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/register" element={<AdminRegister />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Background>
    </div>
  );
}

export default App;
