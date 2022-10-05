import styles from "./buttonSelect.module.css"

export default function ButtonSelect (props) {
  return <button className={styles[props.className]}>{props.value}</button>
}