import styled from "styled-components";

export const PrincipalImg = styled.img`
  height: auto;
  max-height:700px;
  width: 100%;
  @media screen and (max-width:640px){
    height: 500px;
    width:600px;
  }
`;
export const DivText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
