import styles from "./Dropdown.module.css"

export default function Dropdown({list}){
  console.log(list[0].make);
  return <div className={styles.dropDownBlock}>
    <img src={list[0].url} alt={list[0].model}/>
    <div className="">
      <h2>{list[0].make}</h2>
      <p>{list[0].model}</p>
    </div>
  </div>
}