import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { Marker, Popup } from 'react-leaflet'
import rentalApi from '../../../redux/rentalApi'
import car from '../../../assets/icons/sport-car.png';
import { useSelector, useDispatch } from 'react-redux'
import { setCar } from '../../../redux/slice/carRent'



export default function Maps (props){
  
  const styleMap = {
    borderRadius: "8px", 
    margin: props.margin, 
    width: props.width, 
    height: props.height
  }

  let carIcon = L.icon({
    iconUrl: car,
    iconSize: new L.Point(60, 75),
  })

  const {data,  isLoading } = rentalApi.useCarsQuery()
  const dispatch = useDispatch();
  const getId = (car) => {
    dispatch(setCar(car));
  }

  const cars = useSelector(state => state)

    return (
  <MapContainer style={styleMap} center={[43.26171310000001, 76.92932094232916]} zoom={13} scrollWheelZoom={true}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

    {
      !isLoading && data.map( car => (<Marker key={car.id} icon={carIcon} position={car.position}>
          <Popup>
            <h5>{car.make}</h5>
            <button onClick={() => getId(car)}>выбрать</button>
          </Popup>
        </Marker>))
    }
  </MapContainer>)
}





