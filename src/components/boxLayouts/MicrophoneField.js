import './AudioField.css';
import img from "../../assets/images/silky-microphone.png";
import { useEffect } from 'react';

const MicrophoneField = (props) => {
  useEffect(()=>{
    let dom = document.getElementsByClassName('inputImg1')[0];
    if (props.runningState === "hold"){
      dom.style.animationPlayState = "paused";
    }
    else{
      dom.style.animationPlayState = "running";
    }
  })
  return (
    <div className="inputField">
      <div className="innerBox">
        <textarea disabled rows="13" cols="25">
        </textarea>
        <img className="inputImg1 microPhone" src={img} width="150px"/>
      </div>
    </div>
  );
};
export default MicrophoneField;
