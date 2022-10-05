import styles from './ServiceTile.module.css'
export default function ServiceTile(props){
  return <>
    <div className={styles.tile}>
      <img alt={props.alt} src={props.src}/>
      <div className={styles.signature}>
        <span className={styles.signature}> Аренда </span>
      </div>
    </div>
  </>
}