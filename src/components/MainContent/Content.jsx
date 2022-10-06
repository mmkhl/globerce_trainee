import styles from './MainContent.module.css'
import SelectOptions from './SelectOptions/SelectOptions'
import Maps from './Maps/Maps'
import AddService from '../MainContent/AddServices/AddService'
import Advantages from './Advantages/Advantages'
import Contacts from './Contacts/Contacts'
import Feedback from './Feedback/Feedback'

export default function Content(){
  return( <div>
    <div className={styles.content}>
      <SelectOptions/>
      <Maps width="600px" height="400px" margin="70px 0px"/>
    </div>
    <AddService/>
    <Advantages/>
    <Contacts/>
    <Feedback/>
  </div>
  )

}