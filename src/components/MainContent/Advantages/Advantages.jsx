import AdvantageTile from "./AdvantageTile/AdvantageTile"
import styles from './Advantages.module.css'
import img1 from './image 4.png'
import img2 from './image 5.png'
import img3 from './image 6.png'



export default function Advantages(){
  return <div className={styles.advantages}>
    <AdvantageTile src={img1} alt={"Quick"} text={"Быстрое оформление"}/>
    <AdvantageTile src={img2} alt={"Comfortable"} text={"Удобный пункт выдачи"}/>
    <AdvantageTile src={img3} alt={"Quality"} text={"Высокое качество"}/>
  </div>
}