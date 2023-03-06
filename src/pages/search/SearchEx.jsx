import React, {useCallback,useState} from 'react'
import Counter from "../../components/counter/Counter"
import Search from "../../components/search/Search"
import Stepss from '../../components/steps/Stepss'

const SearchEx = () => {

  const [counter,setCounter]=useState(0);

  const increment = useCallback(()=>{
    setCounter(prevCounter=>prevCounter+1)
  },[])

  const decrement = useCallback(()=>{
    setCounter(prevCounter=>prevCounter-1)
  },[])

  

  const numExercise= ()=>{
    let num =counter *3
    return (num)
  }

  return (
    <div>
      <Stepss/>
      <Counter
      counter={counter}
      increment={increment}
      decrement={decrement}
      numExercise={numExercise}/>
      <Search/>
    </div>
  )
}

export default SearchEx