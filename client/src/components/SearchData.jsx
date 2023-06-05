import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { useState } from "react";
import axios from "axios";
import TableBox from "./TableBox";

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
  margin: 1rem;
  width: 70%;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;
const FlexForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

//logo
const Logo = styled.img`
  height: 100px;
  width: 100px;
  padding: 1rem 1rem 0.5rem 1rem;
  cursor: pointer;
`;

const ShowData = styled.div`
  font-size: 1.8rem;
  color: #ffffff;
  text-align: center;
  display: inline;
  padding: 1rem;
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

const FlexBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Inputroll = styled.input`
  font-size: 1.8rem;
  color: #393e46;
  background-color: #eeeeee;
  text-align: center;
  padding: 1rem;
  font-family: "cursive";
  border: none;
  border-radius: 1.2rem;
  /* margin: 1rem 1rem; */
  display: inline;
  cursor: pointer;
  width: 75%;
`;

const SubmitButton = styled.button`
  font-size: 1.8rem;
  color: #393e46;
  background-color: #eeeeee;
  text-align: center;
  padding: 1rem 3rem;
  font-family: "cursive";
  border: none;
  border-radius: 1.2rem;
  /* margin: 1.8rem 1rem; */
  display: inline;
  cursor: pointer;
`;

const CheckTime = styled.div`
  font-size: 1.8rem;
  color: #ff0000;
  text-align: center;
  display: inline;
  padding: 1.5rem;
  font-family: "Itim", "cursive";
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

function SearchData() {
  const [search, setSearch] = useState("");
  const [redMessage, setRedMessage] = useState("");
  //after search, getting the employee data
  const [employeeData, setEmployeeData] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();

    setEmployeeData([]);

    if (search.length === 0) {
      setRedMessage("Please Enter Employee ID");
      setTimeout(() => {
        setRedMessage("");
      }, 5000);
      return;
    }

    if (search.length !== 24) {
      setRedMessage("Please Enter Valid Employee ID");
      setTimeout(() => {
        setRedMessage("");
      }, 5000);
      return;
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios
        .post("http://localhost:5000/api/searchdata/", { search }, config)
        .then((res) => {
            // console.log(res.data);
          setEmployeeData(res.data.data);
          setRedMessage(res.data.message);
          setTimeout(() => {
            setRedMessage("");
          }, 5000);
        });
    } catch (error) {
      console.log(error);
    }

    setSearch("");
  };

  return (
    <>
      <Navbar />

      <FlexBody>
        <WelcomeMessage>Welcome</WelcomeMessage>
        <Flex>
          <Inputroll
            type="text"
            placeholder="For Search Enter Emoloyee ID"
            name="search"
            onChange={handleChange}
            value={search}
          />
          <SubmitButton onClick={handleClick}>Submit</SubmitButton>
        </Flex>
        <CheckTime>{redMessage}</CheckTime>

        {employeeData.length === 0 ? null : (
          <Table>
            <TableRow>
              <TableHeadling
                style={{ borderRadius: "0.3rem 0rem 0rem 0.3rem" }}
              >
                Emoloyee ID
              </TableHeadling>
              <TableHeadling style={{ borderRadius: "0rem 0rem 0rem 0rem" }}>
                Name
              </TableHeadling>
              <TableHeadling
                style={{ borderRadius: "0rem 0.3rem 0.3rem 0rem" }}
              >
                Mobile No.
              </TableHeadling>
            </TableRow>

            <TableNormalRow>
              <TableData>{employeeData[0].employeeID}</TableData>
              <TableData>{employeeData[0].name}</TableData>
              <TableData>{employeeData[0].number}</TableData>
            </TableNormalRow>
          </Table>
        )}
      </FlexBody>
    </>
  );
}

export default SearchData;
