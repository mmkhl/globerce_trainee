import styles from "./Optionally.module.css"
import {useDispatch} from 'react-redux'

export default function Details({power, model, make, price}){
  return <div className={styles.blockParam}>
    <h2>Вы выбрали {make} {model}</h2>
    <div>Марка: {make}</div>
    <div>Модель: {model}</div>
    <div>Мощность: {power}</div>
    <div>Стоимость за сутки: {price}</div>
  </div>
}