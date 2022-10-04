import styles from './options.module.css'




export default function SelectOptions(){
  return <div className={styles.options}>
    <h2>Вы выбрали машину</h2>
    <input placeholder='Время'/>
    <button>Арендовать</button>
    <button>Отказаться</button>
  </div>
}