import React from 'react'
import styles from './MenuItem.module.css'

function MenuItem(props){
  return <div className={styles.item}>
    <span className={styles.test}>{props.name}</span>
    <div className={styles.imgDropdown}></div>
  </div>
}

export default MenuItem;