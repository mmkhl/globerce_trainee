import { setCar } from '../../../../redux/slice/carRent'
import styles from './ServiceTile.module.css'
import { useDispatch } from 'react-redux';

export default function ServiceTile({src, model, id}){
  const dispatch = useDispatch()
  const selectId = car => {
    dispatch(setCar(car))
  }
  return <>
    <div onClick={()=>selectId(id)} className={styles.tile} style={{ backgroundImage: src}}>
      <div className={styles.signature}>
      {model}
      </div>
    </div>
  </>
}