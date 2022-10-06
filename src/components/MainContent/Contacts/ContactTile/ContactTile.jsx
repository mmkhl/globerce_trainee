import styles from "./ContactTile.module.css"

export default function ContactTile(props){
  return <div className={styles.infoTile}>
    <h2>{props.name}</h2>
    <span>{props.details}</span>
  </div>
}