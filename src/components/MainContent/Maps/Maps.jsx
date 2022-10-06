import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import 'leaflet/dist/leaflet.css'
import { Marker, Popup } from 'react-leaflet'

// import styles from "./Maps.module.css";


export default function Maps (props){

  return (<MapContainer style={{borderRadius: "8px", margin: props.margin, width: props.width, height: props.height}} center={[43.26171310000001, 76.92932094232916]} zoom={13} scrollWheelZoom={false}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
    <Marker position={[43.26171310000001, 76.92932094232916]}>
    <Popup>
      A pretty CSS3 popup.
    </Popup>
  </Marker>
  </MapContainer>)
}





