import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Background = styled.div`
  background-color: rgba(153, 147, 147, 0.72);
  height: 100vh;
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
  color: #ff1b0f;
  background-color: #ffe569;
  text-align: center;
  padding: 1rem;
  font-family: "sans-serif cursive";
  border: none;
  border-radius: 1.2rem;
  margin: 0.8rem;
  display: inline;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  font-size: 1.8rem;
  color: #ff1b0f;
  background-color: #eeeeee;
  text-align: center;
  padding: 1rem 3rem;
  font-family: "sans-serif cursive";
  border: none;
  border-radius: 1.2rem;
  margin: 1rem 1rem;
  display: inline;
  cursor: pointer;
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

const Error = styled.div`
  font-size: 1.8rem;
  color: #ff0000;
  text-align: center;
  display: inline;
  padding: 1.5rem;
  font-family: "Itim", "cursive";
`;

function AdminLogin() {
  const [userInfo, setUserInfo] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const [redMessage, setRedMessage] = useState("");

  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;

    setUserInfo((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  async function handleClick() {
    try {
      await createUserWithEmailAndPassword(
        auth,
        // userInfo.fname,
        // userInfo.lname,
        userInfo.email,
        userInfo.password
        );
        
        auth.currentUser.name = userInfo.fname + " " + userInfo.lname;

      setRedMessage("Successfully created user account");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.log(error.message.split("/")[1].split(")")[0]);
      setRedMessage(error.message.split("/")[1].split(")")[0]);
    }
  }

  return (
    <>
      <Navbar />
      <FlexBody>
        <WelcomeMessage>Register</WelcomeMessage>
        <FlexForm>
          <Inputroll
            type="text"
            placeholder="First Name"
            name="fname"
            onChange={handleChange}
            value={userInfo.fname}
          />
          <Inputroll
            type="text"
            placeholder="Last Name"
            name="lname"
            onChange={handleChange}
            value={userInfo.lname}
          />

          <Inputroll
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={userInfo.email}
          />
          <Inputroll
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={userInfo.password}
          />
        </FlexForm>
        <SubmitButton onClick={handleClick}>Submit</SubmitButton>
        <Error>{redMessage}</Error>
      </FlexBody>
    </>
  );
}

export default AdminLogin;
