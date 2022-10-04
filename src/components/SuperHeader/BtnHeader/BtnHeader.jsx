import React from 'react';
import styles from './BtnHeader.module.css';


function BtnHeader (props){
  return <div className={styles.btn}>{props.name}</div>
}

export default BtnHeader;