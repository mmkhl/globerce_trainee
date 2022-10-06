// import './SideBar/MenuItem'
import MenuItem from './SideBar/MenuItem'
import styles from './MainContent.module.css'
import Content from './Content'




export default function MainContent(){
  return <div>
    <div className={styles.content}>
      <div className={styles.sideBar}>
        <MenuItem name="Категории"/>
        <MenuItem name="Автомобили"/>
        <MenuItem name="Акции"/>
        <MenuItem name="Новочти"/>
        <MenuItem name="Арендовать авто"/>
      </div>
      <Content/>
    </div>
  </div>
}

