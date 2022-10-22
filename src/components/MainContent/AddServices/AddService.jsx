/* eslint-disable react/style-prop-object */
import ServiceTile from "./ServiceTile/ServiceTile"
import styles from './AddServices.module.css'
import img1 from "./1.png"
import img2 from "./2.png"
import img3 from "./3.png"
import img4 from "./4.png"
import img5 from "./5.png"
import img6 from "./6.png"


console.log(img1);
export default function AddService(){
  return(<>
    <h2 id="#rent">Дополнительные услуги для</h2>
    <div className={styles.tileList}>
      <ServiceTile alt="camry 40" src={`url(${img1})`}/>
      <ServiceTile alt="lexus 570" src={`url(${img2})`} />
      <ServiceTile alt="camry 70" src={`url(${img3})`}/>
      <ServiceTile alt="Gelendwagen" src={`url(${img4})`}/>
      <ServiceTile alt="Crysler" src={`url(${img5})`}/>
      <ServiceTile alt="BMW e36" src={`url(${img6})`}/>
    </div>
  </>)
}