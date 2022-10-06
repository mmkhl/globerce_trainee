import styles from './ServiceTile.module.css'
export default function ServiceTile(props){

  console.log(props.src);
  return <>
    {/* <div className={styles.tile} style={{ backgroundImage: props.src }}> */}
    <div className={styles.tile} style={{ backgroundImage: props.src}}>
      <div className={styles.signature}>
      Аренда
      </div>
    </div>
  </>
}