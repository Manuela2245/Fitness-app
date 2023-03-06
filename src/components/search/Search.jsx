import React,{useState,useEffect} from 'react'
import TypeExerciseBar from "../typeExerciseBar/TypeExcerciseBar"
import Exercises from "../exercises/Exercises"
import {exerciseOptions,requestData} from "../../utilities/page.request"

import s from "./style.module.css"

const Search = () => {
    const[search,setSearch]=useState("")

    const [exercises,setExercises]=useState([])

    const [bodyParts,setBodyParts]=useState([])

    useEffect(()=>{
        const requestExerciseData=async ()=>{
            const dataBodyParts=await requestData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
            setBodyParts(["all",...dataBodyParts]);
        }
        requestExerciseData()
    },[])

    const handleSearch= async()=>{
        if(search){
            const dataExercise= await requestData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
            const exerciseSearch=dataExercise.filter(
                (exercise)=> exercise.name.toLowerCase().includes(search)
                ||exercise.bodyPart.toLowerCase().includes(search)
                ||exercise.equipment.toLowerCase().includes(search)
                );
            setSearch("");
            setExercises(exerciseSearch);
        }
    }

  return (
    <div>
        <div className={s.container}>


        <h1 className={s.titleh1}>Search exercise</h1>
            <div className={s.boxes}>
                <input type="text" placeholder='Search exercise' className={s.inputSearch} value={search} onChange={(e)=>setSearch(e.target.value.toLowerCase())}></input>
                <button className={s.button} onClick={handleSearch}>
                    Search
                </button>
            </div>
            <h1 className={s.title2h1}>What you are going to do today?</h1>
            <div>
                <TypeExerciseBar 
                bodyParts={bodyParts}
                setBodyParts={setBodyParts}
                exercises={exercises}
                setExercises={setExercises}/>
            </div>
        </div>
        <div>
            <Exercises 
            partName={bodyParts}
            exercises={exercises}
            setExercises={setExercises}
            setBodyParts={setBodyParts}
            />
        </div>
    </div>
  )
}

export default Search