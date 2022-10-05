import styles from './Options.module.css'
import TimeSelect from './TimeSelect/TimeSelect'
import Optionally from './Optionally/Optionally'
import ButtonSelect from './ButtonSelect/ButtonSelect'


export default function SelectOptions(props){
  return <div className={styles.options}>
    <h2>Вы выбрали {props.selectCar}</h2>
    <TimeSelect placeholder="Время"/>
    <ButtonSelect className="green" value="Арендовать"/>
    <ButtonSelect className="red" value="Отказаться"/>
    <Optionally param="Детское кресло"/>
    <Optionally param="Кондицонер"/>
  </div>
}