import React, { useEffect,useMemo } from 'react'
import s from "./style.module.css"

const Counter = ({counter,increment,decrement,numExercise}) => {

    useEffect(()=>{
        console.log("increment")
    },[increment])
    useEffect(()=>{
        console.log("decrement")
    },[decrement])

    let numExercises= useMemo(()=>{
        return counter *3 
    },[counter])

  return (
    <div>
        <div className={s.container}>
          <h1 className={s.title}>How many hours you train per day?</h1>
          <h2 className={s.text}>{counter}</h2>
          <div className={s.buttonContainer}>
            <button className={s.button} onClick={decrement}>-</button>
            <button className={s.button} onClick={increment}>+</button>
          </div>
          <h3 className={s.text}>You need to search {numExercises} exercises for your workout</h3>
        </div>
    </div>
  )
}

export default Counter