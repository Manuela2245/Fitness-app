import styled from "styled-components";

export const LogoImg = styled.img`
  height: 80px;
  width: 100px;
  padding-top:20px;
  padding-top:20px;
  }
`;

export const TextNavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-around;
  align-items:center;
  background-color:black;
  @media screen and (max-width:640px){
    display: none;
  }
`; 
export const TextNavbar = styled.p`
  font-size: 25px;
  font-weight: 400;
  padding-top: 5px;
  padding-left: 5px;
  color:white;
`;