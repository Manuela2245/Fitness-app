import React from 'react'
import s from "./style.module.css"

const Stepss = () => {
  return (
    <div style={{color:"white"}}>
        <div className={s.container}>

            <div className={s.containerStep}>
              <h1 className={s.number}>1</h1>
              <div className={s.insideStep}>
                <h2 className={s.title}>Calculate number of exercises</h2>
                <p className={s.text}>With our Calculator search how many exercises you need to do based on your workout time</p>
              </div>  
            </div>

            <div className={s.containerStep}>
              <h1 className={s.number}>2</h1>
              <div className={s.insideStep}>
                <h2 className={s.title}>Search exercises</h2>
                <p className={s.text}>Search with our search bar or click at the buttons if you what to search based on a specific muscle</p>
              </div>  
            </div>

            <div className={s.containerStep}>
              <h1 className={s.number}>3</h1>
              <div className={s.insideStep}>
                <h2 className={s.title}>Look and workout!</h2>
                <p className={s.text}>When you perform a search, you may come across a gift that demonstrates an exercise routine. Take the time to watch the demonstration and follow along with the exercises!</p>
              </div>  
            </div>
        </div>
    </div>
  )
}

export default Stepss