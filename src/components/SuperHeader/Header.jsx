import React from "react"
import Logo from "./Logo/Logo";
import BtnHeader from "./BtnHeader/BtnHeader";
import Search from "./Search/Search";
import Contacts from "./Contacts/Contacts";
import styles from "./Header.module.css"




function Header(){
  return <div className={styles.header}>
    <Logo/>
    <BtnHeader name="О нас"/>
    <BtnHeader name="Аренда"/>
    <BtnHeader name="Контакты"/>
    <BtnHeader name="Акции"/>
    <Search/>
    <div className="schedule">
      <Contacts name="График работы"/>
      <Contacts name="8:00 - 21:00"/>
    </div>
  </div>
}

export default Header;