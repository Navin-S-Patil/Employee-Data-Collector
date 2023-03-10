import React from "react";
import styled from "styled-components";
import logo from "../img/employeePortalLogo.png";
import { Link } from "react-router-dom";

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


function Navbar() {
  return (
 
      <Flex> <Link to="/" style={{ textDecoration: "none" }}>
        <Logo src={logo} />
        </Link>
        <FlexForm>
          <ShowData>
            <Link to="/showData" style={{ textDecoration: "none" }}>
              view Employee Data
            </Link>
          </ShowData>
          <ShowData>
            <Link to="/searchData" style={{ textDecoration: "none" }}>
              Search Employee Data
            </Link>
          </ShowData>
        </FlexForm>
      </Flex>

  );
}

export default Navbar;
