import styles from "./buttonSelect.module.css"
import 'react-toastify/dist/ReactToastify.min.css';

export default function ButtonSelect (props) {

  return <>
    <button onClick={props.onClick} className={styles[props.className]}>{props.value}</button>
  </>
}