import styles from './MainContent.module.css'
import SelectOptions from './SelectOptions/SelectOptions'
import Maps from './Maps/Maps'
import AddService from '../MainContent/AddServices/AddService'
import Advantages from './Advantages/Advantages'

export default function Content(){
  return( <div>
    <div className={styles.content}>
      <SelectOptions/>
      <Maps/>
    </div>
    <AddService/>
    <Advantages/>
  </div>
  )

}