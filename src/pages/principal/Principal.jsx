import React from 'react'
import Narbar from '../../components/narbar/Narbar'
import Welcome from '../../components/welcome/Welcome';
import imgLogo from "../../assets/images/logo.png";
import principalImage from "../../assets/images/gymGrirl.jpg";

const Principal = () => {
  return (
    <div id="home">
      <Narbar 
      image={imgLogo}/>

      <Welcome
      title="GymTrain"
      slogan="Health body, happy soul"
      image={principalImage}/>
    </div>
  )
}

export default Principal