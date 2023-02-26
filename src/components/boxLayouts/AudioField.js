import './AudioField.css';
import img from "../../assets/images/speaker.png";
import { useEffect } from 'react';

const AudioField = (props) => {
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
        <img className="inputImg1" src={img} width="400px"/>
      </div>
    </div>
  );
};
export default AudioField;
