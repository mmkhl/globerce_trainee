import styles from "./Optionally.module.css"

export default function Optionally(props){
  return <div className={styles.blockParam}>
    <button className={styles.btnPos}>+</button>
    <span>{props.param}</span>
    <button className={styles.btnNeg}>-</button>
  </div>
}