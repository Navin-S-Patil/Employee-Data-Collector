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
  width: 100vw;
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
  padding: 1rem;
  font-family: "Handlee", "cursive";
  margin: 0.4rem;
  @media screen and (max-width: 700px) {
    padding: 0.5rem;
  }
`;

const Inputroll = styled.input`
  font-size: 1.8rem;
  color: white;
  background-color: #22211b;
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
  color: #551A8B;
  background-color: #eeeeee;
  text-align: center;
  padding: 1rem 3rem;
  font-family: "sans-serif cursive";
  border: none;
  border-radius: 1.2rem;
  margin: 1.8rem 1rem 1rem 1rem;
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

const RegisterLink = styled.div`
  font-size: 1.5rem;
  color: white;
  text-align: center;
  display: inline;
  padding: 1rem;
  font-family: "Itim", "cursive";
  cursor: pointer;
`;

function AdminLogin() {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
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
      await signInWithEmailAndPassword(auth, userInfo.email, userInfo.password);

      setRedMessage("Successfully Logged In");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.log(error);
      //   setRedMessage(error.message);
    }
  }

  return (
    <>
      <Navbar />
      <FlexBody>
        <WelcomeMessage>Login</WelcomeMessage>
        <FlexForm>
          <Inputroll
            type="text"
            placeholder="Username"
            name="email"
            onChange={handleChange}
            value={userInfo.email}
          />
          <Inputroll
            type="password"
            placeholder="Enter your password"
            name="password"
            onChange={handleChange}
            value={userInfo.password}
          />
        </FlexForm>
        <SubmitButton onClick={handleClick}>Submit</SubmitButton>
        <RegisterLink onClick={() => navigate("/register")}>
          Register Here
        </RegisterLink>
        <Error>{redMessage}</Error>
      </FlexBody>
    </>
  );
}

export default AdminLogin;
