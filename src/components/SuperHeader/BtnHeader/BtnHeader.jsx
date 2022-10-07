import styles from './BtnHeader.module.css';

export default function BtnHeader (props){
  return <a href={props.anchor} className={styles.btn}>{props.name}</a>  
}

