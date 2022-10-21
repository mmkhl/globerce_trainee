import styles from './Options.module.css'
import TimeSelect from './TimeSelect/TimeSelect'
import Optionally from './Optionally/Optionally'
import ButtonSelect from './ButtonSelect/ButtonSelect'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default function SelectOptions(props){
  const firstToast = (type, message) => () =>{
    toast[type](message)
  }
  return <div className={styles.options}>
    <h2>Вы выбрали {props.selectCar}</h2>
    <TimeSelect placeholder="Время"/>
    <ToastContainer/>
    <ButtonSelect onClick={firstToast('success', 'Вы арендовали машину')} className="green" value="Арендовать"/>
    <ButtonSelect onClick={firstToast('error', 'Вы отказались')} className="red" value="Отказаться"/>
    <Optionally param="Детское кресло"/>
    <Optionally param="Кондицонер"/>
  </div>
}