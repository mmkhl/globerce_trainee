import styles from './options.module.css'

import ButtonSelect from './ButtonSelect/ButtonSelect'


export default function SelectOptions(props){
  return <div className={styles.options}>
    <h2>Вы выбрали {props.selectCar}</h2>
    <input placeholder='Время'/>
    <ButtonSelect value="Арендовать"/>
    <ButtonSelect value="Отказаться"/>
  </div>
}