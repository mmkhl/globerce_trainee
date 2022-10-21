import styles from "./buttonSelect.module.css"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
export default function ButtonSelect (props) {
  // const handleToast = () => toast.error('Error')
  // const toaster = () =>{
  //   toast('test', {
  //     className: "customToast", 
  //     draggable: true, 
  //     position: toast.POSITION.TOP_RIGHT
  //   })
  // }
  return <>
    <button onClick={props.onClick} className={styles[props.className]}>{props.value}</button>
  </>
}