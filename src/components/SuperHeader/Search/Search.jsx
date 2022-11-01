import React, {useState} from 'react'
import styles from './Search.module.css';
import searchIco from './search.png'
import { rentalApi } from '../../../redux/rentalApi';
import Dropdown from './Dropdown/Dropdown';


export default function Search () {
  const [state, setState] = useState('');
  const [queryString, setQueryString] = useState('');
  console.log(state)
  const {data, isLoading} = rentalApi.useSearchCarQuery(queryString)
  const updateQuery = () => {
    setQueryString(state);
  }

  const clearState = () => {
    setState("")
    setQueryString("")
  };

  data && console.log(data);

  return <div>
    <div className={styles.searchStr}>
      <div className={styles.searchImg}>
        <img src= {searchIco} alt='icon-search'/>
      </div>
      <input type="text" placeholder='Поиск модели' onBlur={updateQuery} value={state} onChange={(e) => {setState(e.target.value)}}/>
      <div className='clear'>
        {state.length>0 ? <div onClick={clearState} className={styles.deleteState}>&times;</div>: ""}
      </div>
      
    </div>
    {queryString.length > 0 && <Dropdown list={queryString.length > 0 ? data : []} />}
  </div>
  
  
  
}

