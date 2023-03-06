import React from 'react'
import{LogoImg,TextNavbarContainer,TextNavbar} from "./StyledNavbar"
import {Route,NavLink,HashRouter} from "react-router-dom";


const Narbar = ({image}) => {
  return (
    <div>
        <TextNavbarContainer>
            <LogoImg src={image} alt="imageLogo"></LogoImg>
            <TextNavbar>Home</TextNavbar>
            <TextNavbar>Why train? </TextNavbar>
            <TextNavbar>Exercises</TextNavbar>
            <TextNavbar>Contact us</TextNavbar>
        </TextNavbarContainer>
    </div>
  )
}

export default Narbar