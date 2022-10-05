import styles from './AdvantageTile.module.css'

export default function Advantages(props){
  return (
    <div className={styles.advngBlock}>
      <img src={props.src} alt={props.alt}/>
      <div className={styles.underAdv}>
      <span >{props.text}</span>
      </div>
    </div>
  )
}