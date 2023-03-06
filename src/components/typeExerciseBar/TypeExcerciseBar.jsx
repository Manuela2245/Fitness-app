import React, { useEffect,useState } from 'react'
import {exerciseOptions,requestData} from "../../utilities/page.request"
import Exercises from '../exercises/Exercises'

import s from "./style.module.css"

const TypeExerciseBar = ({bodyParts}) => {

  const [exercises,setExercises]=useState([]);

  const requestDataBodyParts=async(bodyPart)=>{
    console.log(bodyPart)
    const getDataExercise= await requestData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions)
    const exerciseToShow=getDataExercise.filter(
      (exercise)=> exercise.bodyPart.includes(bodyPart)
      );
      console.log(exerciseToShow)
  setExercises(exerciseToShow);
  }

  return (
    <div>
    <div className={s.boxContainer}>
      {bodyParts.map((bodyPart,index)=>{
        return(
          <div key={index}>
            <button className={s.boxBodyPart} style={{fontSize:"20px"}} onClick={()=>requestDataBodyParts(bodyPart)}>{bodyPart}</button>
          </div>
        )
      })}
    </div>
    <Exercises
            exercises={exercises}
            setExercises={setExercises}
            />
    </div>
  )
}

export default TypeExerciseBar