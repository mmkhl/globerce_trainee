import styles from './MainContent.module.css'
import SelectOptions from './SelectOptions/SelectOptions'
import Maps from './Maps/Maps'

export default function Content(){
  return( <div>
    <div className={styles.content}>
      <SelectOptions/>
      <Maps/>
    </div>
    
  </div>
  )

}