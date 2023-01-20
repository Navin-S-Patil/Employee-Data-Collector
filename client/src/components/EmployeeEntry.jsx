// import "./App.css";
import styled from "styled-components";
import logo from "../img/employeePortalLogo.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Background = styled.div`
  background-color: #00ADB5;
  height: 100vh;
  width: 100vw;
`;

//flexbox
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
`;


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
  color: #393E46;
  background-color: #EEEEEE;
  text-align: center;
  padding: 1rem;
  font-family: "cursive";
  border: none;
  border-radius: 1.2rem;
  margin: 1rem 1rem;
  display: inline;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  font-size: 1.8rem;
  color: #393E46;
  background-color: #EEEEEE;
  text-align: center;
  padding: 1rem 3rem;
  font-family: "cursive";
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

const ShowData = styled.div`
  font-size: 1.8rem;
  color: #ffffff;
  text-align: center;
  display: inline;
  padding: 2rem 1rem 1rem 1rem;
  font-family: "Itim", "cursive";
`;

function EmployeeEntry() {
  const [employee, setemployee] = useState({ rollNo: "", name: "", number: "" });

  const [redMessage, setRedMessage] = useState("");


  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "rollNo") {
      setemployee({ ...employee, rollNo: value });
    } else if (name === "name") {
      setemployee({ ...employee, name: value });
    } else if (name === "number") {
     if(value >= 0 && value <= 9999999999){
        setemployee({ ...employee, number: value });
      }     
    }
  };

  const handleClick = async (event) => {
    event.preventDefault();
    const { rollNo, name } = employee;

    if(rollNo === "" || name === ""){
      setRedMessage("Roll No. or Name can't be empty !!");
      return;
    }

    

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/attendence",
        { rollNo: rollNo, name: name },
        config
      );
      console.log(data);
      const mesg = data.message;
      const time = data.time;
      
      setemployee({ rollNo: "", name: "" });
      setRedMessage(() => {
        return `${mesg} ${time!=null ? " at "+ time : ""}`;
      });
      setTimeout(() => {
        setRedMessage("");
      }, 5000);
    } catch (error) {
      console.log(error);
      setRedMessage("Please Enter Valid Roll No. and Name");
    }
  };

  return (
    <Background>
      <Flex>
        <Logo src={logo} />
        <ShowData><Link to="/showData">view Employee Data</Link></ShowData>
      </Flex>

      <FlexBody>
        <WelcomeMessage>Welcome</WelcomeMessage>
        <FlexForm>
          <Inputroll
            type="text"
            placeholder="Emoloyee ID"
            name="rollNo"
            onChange={handleChange}
            value={employee.rollNo}
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
    </Background>
  );
}

export default EmployeeEntry;
