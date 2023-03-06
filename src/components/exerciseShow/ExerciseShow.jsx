import React from 'react'
import s from "./style.module.css"

const ExerciseShow = ({exercise}) => {
  return (
    <div style={{display:"flex",flexDirection:"column",backgroundColor:"white",borderRadius:"5px",color:"black",justifyContent:"center",alignItems:"center",padding:"20px"}}>
        <img style={{height:"200px"}} src={exercise.gifUrl} alt={exercise.name} loading="lazy"/>
        <h3 style={{marginTop:"15px",padding:"20px"}}>{exercise.name}</h3>
    </div>
  )
}

export default ExerciseShow