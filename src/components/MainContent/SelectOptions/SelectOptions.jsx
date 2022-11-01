import styles from './Options.module.css'
import TimeSelect from './TimeSelect/TimeSelect'
import Details from './Optionally/Details'
import ButtonSelect from './ButtonSelect/ButtonSelect'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useSelector } from 'react-redux';


export default function SelectOptions(){
  const firstToast = (type, message) => () =>{
    toast[type](message)
  }
  const selectCar = useSelector(state => state.carRent.car)
  return <div className={styles.options}>
    
    { <Details 
    power={selectCar.power} 
    model={selectCar.model}
    make={selectCar.make}
    price={selectCar.price}

    />}
    <TimeSelect placeholder="Время"/>
    <ToastContainer/>
    <ButtonSelect onClick={firstToast('success', 'Вы арендовали машину')} className="green" value="Арендовать"/>
    <ButtonSelect onClick={firstToast('error', 'Вы отказались')} className="red" value="Отказаться"/>
  </div>
}