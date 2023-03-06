import { sportBenefits } from "../../constants/constants";
import { motion } from "framer-motion"
import s from "./style.modules.css"


const Benefits = () => {
  return (
    <div>
        <motion.div className={s.sliderContainer}>
            <motion.div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItem:"center"}} className={s.slider} drag='x' dragConstraints={{right: 1180, left:-1180}} >
              {sportBenefits.map((element) => {
                return(
                <motion.div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItem:"center",height:"auto",width:"80%",maxWidth:"600px",backgroundColor:"black", padding:"50px"}} key={element.id}>
                  <img src={element.image} style={{height:"auto",width:"auto"}}/>;
                  <h1 style={{fontSize:"20px",color:"white"}}>{element.title}</h1>
                  <h3 style={{fontSize:"10px",color:"white"}}>{element.description}</h3>
                </motion.div>)
               })}
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Benefits