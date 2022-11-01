import styles from './BtnHeader.module.css';
import {Link} from 'react-scroll'


export default function BtnHeader ({anchor, name}){
  return (
  <Link 
    to={anchor} 
    smooth={true} 
    offset={0} 
    duration={() => 600} 
    className={styles.btn}>
  {name}
  </Link>) 
}

