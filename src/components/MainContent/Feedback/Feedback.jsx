import Maps from "../Maps/Maps"
import styles from './Feedback.module.css'
import InputFeedback from "./InputFeedback/InputFeedback"


export default function Feedback () {
  return <div className={styles.feedbackSections}>
    <h2>Мы вам перезвоним через 5 минут</h2>
    <div className={styles.fdbkBlock}>
      <div className={styles.left}>
        <InputFeedback width="100%" height="30px" name="Номер телефона"/>
        <InputFeedback width="100%" height="30px" name="Адрес электронной почты"/>
        <InputFeedback width="100%" height="200px" name="Сообщение"/>
      </div>
      <div className={styles.right}>
        <Maps width="450px" height="350px"/>
      </div>
    </div>
  </div>
}