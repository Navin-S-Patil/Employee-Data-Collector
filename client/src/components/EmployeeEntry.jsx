// import "./App.css";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import Navbar from "./Navbar";

const Background = styled.div`
  background-color: rgba(153, 147, 147, 0.72);;
  height: 100vh;
  width: 100vw;
`;

//flexbox
// const Flex = styled.form`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: flex-start;
//   flex-wrap: wrap;

//   @media screen and (max-width: 700px) {
//     flex-direction: column;
//     align-items: center;
//   }
// `;
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
// const Logo = styled.img`
//   height: 100px;
//   width: 100px;
//   padding: 1rem 1rem 0.5rem 1rem;
// `;

const FlexBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const Inputroll = styled.input`
  font-size: 1.8rem;
  color: #FF1B0F;
  background-color: #FFE569;
  text-align: center;
  padding: 1rem;
  font-family: "sans-serif cursive";
  border: none;
  border-radius: 1.2rem;
  margin: 1rem 1rem;
  display: inline;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  font-size: 1.8rem;
  color: #FF1B0F;
  background-color: #eeeeee;
  text-align: center;
  padding: 1rem 3rem;
  font-family: "sans-serif cursive";
  border: none;
  border-radius: 1.2rem;
  margin: 1.8rem 1rem;
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

// const ShowData = styled.div`
//   font-size: 1.8rem;
//   color: #ffffff;
//   text-align: center;
//   display: inline;
//   padding: 1rem;
//   font-family: "Itim", "cursive";
// `;

function EmployeeEntry() {
  const [employee, setemployee] = useState({
    employeeID: "",
    name: "",
    number: "",
  });

  const [redMessage, setRedMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "employeeID") {
      setemployee({ ...employee, employeeID: value });
    } else if (name === "name") {
      setemployee({ ...employee, name: value });
    } else if (name === "number") {
      if (value >= 0 && value <= 9999999999) {
        setemployee({ ...employee, number: value });
      }
    }
  };

  const handleClick = async (event) => {
    event.preventDefault();
    const { employeeID, name, number } = employee;

    if (employeeID === "" || name === "" || number === "") {
      setRedMessage("ID or Name can't be empty !!");
      return;
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/entry",
        { employeeID: employeeID, name: name, number: number },
        config
      );
      console.log(data);
      const mesg = data.message;
      const time = data.time;

      setemployee({ employeeID: "", name: "", number: "" });
      setRedMessage(() => {
        return `${mesg} ${time != null ? " at " + time : ""}`;
      });
      setTimeout(() => {
        setRedMessage("");
      }, 5000);
    } catch (error) {
      console.log(error);
      setRedMessage("Please Enter Valid ID and Name");
    }
  };

  return (
    <>
      <Navbar />
      <FlexBody>
        <WelcomeMessage>Welcome</WelcomeMessage>
        <FlexForm>
          <Inputroll
            type="text"
            placeholder="Emoloyee ID"
            name="employeeID"
            onChange={handleChange}
            value={employee.employeeID}
          />
          <Inputroll
            type="text"
            placeholder="Employee Name"
            name="name"
            onChange={handleChange}
            value={employee.name}
          />
          <Inputroll
            type="text"
            placeholder="Employee Mobile No."
            name="number"
            onChange={handleChange}
            value={employee.number}
          />
        </FlexForm>
        <SubmitButton onClick={handleClick}>Submit</SubmitButton>
        <CheckTime>{redMessage}</CheckTime>
      </FlexBody>
    </>
  );
}

export default EmployeeEntry;
