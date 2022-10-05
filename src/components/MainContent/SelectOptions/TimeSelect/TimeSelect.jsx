import styles from "./timeSelect.module.css"

export default function TimeSelect(props){
  return <input
  className={styles.inpTime} placeholder={props.placeholder}/>
}