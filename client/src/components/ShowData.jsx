import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../img/employeePortalLogo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

const Background = styled.div`
  background-color: #00adb5;
  height: 100vh;
  width: 100vw;
`;

const Flex = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Logo = styled.img`
  height: 100px;
  width: 100px;
  padding: 1rem 1rem 0.5rem 1rem;
`;

const ShowData = styled.div`
  font-size: 1.8rem;
  color: #ffffff;
  text-align: center;
  display: inline;
  padding: 2rem 1rem 1rem 1rem;
  font-family: "Itim", "cursive";
`;

const WelcomeMessage = styled.h1`
  font-size: 3rem;
  color: #222831;
  text-align: center;
  display: inline;
  /* padding: 1rem; */
  font-family: "Handlee", "cursive";
  margin: 0.4rem;
  @media screen and (max-width: 700px) {
    padding: 0.5rem;
  }
`;

const Table = styled.table`
  color: #f2f2f2;
  background-color: #222831;
  font-size: 1rem;
  text-align: left;
  margin: 2rem auto;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  border-radius: 0.3rem;
  padding: 0.2rem;
  width: 50%;
`;

const TableRow = styled.tr`
  /* &:nth-child(even) {
    background-color: #f2f2f2;
  } */
  color: #222831;
  background-color: #eeeeee;
  font-size: 1.2rem;
  text-align: center;
  margin: auto auto;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  border-radius: 0.3rem;
  padding: 0.2rem;
`;

const TableHeadling = styled.th`
  padding: 0.4rem 0.4rem;
  text-align: center;
  margin: auto auto;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  font-size: 1.5rem;
`;

const TableNormalRow = styled.tr`
  color: #eeeeee;
  background-color: #222831;
  font-size: 1.2rem;
  text-align: center;
  margin: auto auto;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  border-radius: 0.3rem;
  padding: 0.2rem;
`;

const TableData = styled.td`
  padding: 0.4rem 0.4rem;
  text-align: center;
  margin: auto auto;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  font-size: 1.4rem;
`;

function ShwoData() {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/showData").then((res) => {
      setEmployeeData(res.data.data);
    });
  }, []);

  return (
    <Background>
      {/* <Flex>
        <Logo src={logo} />
        <ShowData>
          <Link to="/">Enter Employee Data</Link>
        </ShowData>
      </Flex> */}
      <Navbar />

      <WelcomeMessage>Welcome</WelcomeMessage>

      {employeeData.length === 0 ? (
        <h1 style={{ textAlign: "center", color: "#222831" }}>No Data Found</h1>
      ) : (
        <Table>
          <TableRow>
            <TableHeadling style={{ borderRadius: "0.3rem 0rem 0rem 0.3rem" }}>
              Emoloyee ID
            </TableHeadling>
            <TableHeadling style={{ borderRadius: "0rem 0rem 0rem 0rem" }}>
              Name
            </TableHeadling>
            <TableHeadling style={{ borderRadius: "0rem 0.3rem 0.3rem 0rem" }}>
              Mobile No.
            </TableHeadling>
          </TableRow>

          {employeeData.map((item) => {
            return (
              <TableNormalRow>
                <TableData>{item.employeeID}</TableData>
                <TableData>{item.name}</TableData>
                <TableData>{item.number}</TableData>
              </TableNormalRow>
            );
          })}
        </Table>
      )}
    </Background>
  );
}

export default ShwoData;
