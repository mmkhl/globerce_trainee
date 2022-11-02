import styles from "./Dropdown.module.css"
import { Link } from "react-router-dom";

export default function Dropdown({ list }) {
  const setRentCar = () => {
    console.log(list.id);
  }
  console.log(list.model);
  return <Link to={`/${list.make}`} >
    <div onClick={() => setRentCar()} className={styles.dropDownBlock}>
      <img src={list.url} alt={list.model} />
      <div className="">
        <h2>{list.make}</h2>
        <p>{list.model}</p>
      </div>
    </div>
  </Link>
}