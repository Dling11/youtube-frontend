import React, { useState } from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import { Link } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Upload from "./Upload";

// container & wrapper
const Container = styled.div`
  position: sticky;           // should be sticky
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;
// search & input & button
const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: ${({ theme }) => theme.text};
`;
const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};

`;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #e88b27;
  color: #e88b27;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;


const Navbar = () => {
  return (
    <Container>

      <Wrapper>
        <Search>
          <Input placeholder="Search"/>
          <SearchOutlinedIcon />
        </Search>
        <Link
          to="signin"
        >
          <Button>
          <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
        </Link>
      </Wrapper>

    </Container>  
  )
}

export default Navbar