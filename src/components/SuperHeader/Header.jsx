import React from "react"
import Logo from "./Logo/Logo";
import BtnHeader from "./BtnHeader/BtnHeader";
import Search from "./Search/Search";
import Contacts from "./Contacts/Contacts";
import styles from "./Header.module.css"




function Header(){
  return <div className={styles.header}>
    <Logo/>
    <BtnHeader anchor="" name="О нас"/>
    <BtnHeader anchor="#rent" name="Аренда"/>
    <BtnHeader anchor="#contactInfo" name="Контакты"/>
    <BtnHeader anchor="" name="Акции"/>
    <Search/>
    <div className="schedule">
      <Contacts name="График работы"/>
      <Contacts name="8:00 - 21:00"/>
    </div>
  </div>
}

export default Header;