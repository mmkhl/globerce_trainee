import "./ContactTile.module.css";


export default function ContactTile(props){
  return <div>
    <h2>{props.name}</h2>
    <span>{props.details}</span>
  </div>
}