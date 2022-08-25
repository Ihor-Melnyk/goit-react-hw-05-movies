import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavBar = styled.header`
  padding: 35px;
  border-bottom: 3px solid grey;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const NavLinkHeader = styled(NavLink)`

font-size: 35px;
font-weight:700;
margin-right:25px;
text-decoration: none;
transform: scale(1.0);
color: black;
border-radius: 15px;
padding: 10px;

  :hover,
  :focus {
    transform: scale(1.05);
  }
  &.active {
    text-decoration: underline;
    background-color: tomato;
    color: white;
    transform: scale(1.05);
    
  }
`