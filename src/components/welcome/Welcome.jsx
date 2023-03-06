import React from 'react'
import {PrincipalImg,DivText} from "./StyledWelcome.jsx"
import s from "./style.module.css";
const Welcome = ({title,slogan,image}) => {
  return (
    <div className={s.divContainer}>
        <PrincipalImg src={image} alt="principalImage" style={{gridRow:"1/5", gridColumn:"1/5"}}></PrincipalImg>
        <DivText style={{gridRow:"1/2", gridColumn:"1/5",color:"white"}} className={s.divText}>
            <h1 className={s.title} >{title}</h1>
            <h3 className={s.text}>{slogan}</h3>
        </DivText>
    </div>
  )
}

export default Welcome