import styles from "./buttonSelect.module.css"

export default function ButtonSelect (props) {
  return <button className={styles.btnSlct}>{props.value}</button>
}