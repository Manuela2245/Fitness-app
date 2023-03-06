import React from 'react'
import ExerciseShow from '../ExerciseShow/ExerciseShow'

const Exercises = (props) => {
  return (
    <div>
        <div >
            <div style={{display:"flex", direction:"row",gap:"40px",flexWrap:"wrap" ,justifyContent:"center",alignItems:"center",margin:"50px"}} >
                {props.exercises.map((exercise,index,)=>{
                    return(
                    <div>
                        <ExerciseShow 
                        key={index} exercise={exercise}/>
                    </div>
                    
                )})}
            </div>
        </div>
    </div>
  )
}

export default Exercises
