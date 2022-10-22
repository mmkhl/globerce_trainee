import styles from './BtnHeader.module.css';
import {Link} from 'react-scroll'


export default function BtnHeader ({anchor, name}){
  console.log(anchor);
  return (
  <Link to={anchor} smooth={true} offset={100} duration={() => 500} className={styles.btn}>{name}</Link>) 
}

