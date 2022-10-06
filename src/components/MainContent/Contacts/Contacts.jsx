import ContactTile from './ContactTile/ContactTile';
import styles from './Contacts.module.css';


export default function Contacts(){
  return <div className={styles.tilesBlocks}>
      <h2>Контакты</h2>
      <hr/>
    <div className={styles.tiles}>
      <ContactTile name="Адрес" details="г.Алматы, ул. Жибек Жолы 135"/>
      <ContactTile name="Режим работы" details="С 8:00 до 21:00 без выходных"/>
      <ContactTile name="Контакты" details="+7 (747) - 293 - 37 - 67"/>
      <ContactTile name="Почта" details="mmkhl@globerce.kz"/>
    </div>
  </div>
}
