import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../img/Adobe_logo.png";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// const Background = styled.div`
//   background-color: #00adb5;
//   height: 100vh;
//   width: 100vw;
// `;

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
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

//logo
const Logo = styled.img`
  height: 2.5rem;
  /* width: 100px; */
  padding: 1rem 1rem 0.5rem 1rem;
  cursor: pointer;
`;

const ButtonStyle = styled.button`
  font-size: 1.5rem;
  color: white;
  text-align: center;
  display: inline;
  padding: 0.8rem;
  font-family: "Itim", "cursive";
  background-color: #ff1b0f;
  border: none;
  border-radius: 0.5rem;
  margin: 1rem;
  cursor: pointer;
  &:hover {
    animation: ease-in-out;
    animation-duration: 0.5s;
  }
  &:visited {
    color: white;
  }

  @media screen and (max-width: 700px) {
    padding: 0.5rem;
  }
`;

function Navbar() {
  const [user, setUser] = useState(auth?.currentUser);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      alert("Logged out successfully");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Logo src={logo} />
      </Link>
      <FlexForm>
        <ButtonStyle>
          {user ? (
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              onClick={handleLogout}
            >
             {auth?.currentUser?.displayName} Logout
            </Link>
          ) : (
            <Link to="/login" style={{ textDecoration: "none" }}>
              Admin Login
            </Link>
          )}
        </ButtonStyle>
      </FlexForm>
    </Flex>
  );
}

export default Navbar;
