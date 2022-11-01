/* eslint-disable react/style-prop-object */
import ServiceTile from "./ServiceTile/ServiceTile"
import styles from './AddServices.module.css'
import rentalApi from "../../../redux/rentalApi"

export default function AddService(){
  const {data, isLoading}=rentalApi.useCarsQuery();
  console.log(data);
  return(<>
    <h2 id="#rent">Дополнительные услуги для</h2>
    <div className={styles.tileList}>
    {
    !isLoading && data.map(car => ( 
      <ServiceTile 
      key={car.id} 
      model={car.model} 
      id={car}
      src={`url(${car.url})`} />))
    }

    </div>
  </>)
}