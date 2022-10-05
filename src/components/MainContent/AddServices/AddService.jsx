import ServiceTile from "./ServiceTile/ServiceTile"
import styles from './AddServices.module.css'
import img1 from "./1.png"
import img2 from "./2.png"
import img3 from "./3.png"
import img4 from "./4.png"
import img5 from "./5.png"
import img6 from "./6.png"



export default function AddService(){
  return(<>
    <h2>Дополнительные услуги для</h2>
    <div className={styles.tileList}>
      <ServiceTile alt="camry 40" src= {img1}/>
      <ServiceTile alt="lexus 570" src={img2} />
      <ServiceTile alt="camry 70" src={img3}/>
      <ServiceTile alt="Gelendwagen" src={img4}/>
      <ServiceTile alt="Crysler" src={img5}/>
      <ServiceTile alt="BMW e36" src={img6}/>
    </div>
  </>)
}