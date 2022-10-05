import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import 'leaflet/dist/leaflet.css'
import { Marker, Popup } from 'react-leaflet'

// import styles from "./Maps.module.css";


export default function Maps (){

  return (<MapContainer style={{borderRadius: "8px", margin: "70px 40px", width:"600px", height: "450px"}} center={[43.26171310000001, 76.92932094232916]} zoom={13} scrollWheelZoom={false}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
    <Marker position={[43.26171310000001, 76.92932094232916]}>
    <Popup>
      A pretty CSS3 popup.
      Easily customizable.
    </Popup>
  </Marker>
  </MapContainer>)
}





