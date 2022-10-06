import './InputFeedback.module.css'

export default function InputFeedback(props){
  return <textarea placeholder={props.name} style={{resize: "none", width: props.width, height: props.height}}/>
}