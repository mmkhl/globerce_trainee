import React, {useState} from 'react'
import styles from './Search.module.css';
import searchIco from './search.png'

// function clear(){
//   const clearInp = document.getElementsByTagName()
//   clearInp.value = ""
// }


function Search () {
  const [state, setState] = useState('');


  const search = <div className={styles.searchStr}>
  <div className={styles.searchImg}>
    <img src= {searchIco} alt='icon-search'/>
  </div>
  <input type="text" placeholder='Поиск модели' value={state} onChange={(e) => {setState(e.target.value)}}/>
</div>
  
  return search
}

export default Search;