import AudioField from "./boxLayouts/AudioField";
import InputField from "./boxLayouts/InputField";
import MicrophoneField from "./boxLayouts/MicrophoneField";
import img from '../assets/images/arrow.png'
import { useState } from "react";
import './Main.css';

function setStates1(props){
    props.setAppState('speech_to_text')
    props.setRunningState('hold')
}
function setStates0(props){
    props.setAppState('text_to_speech')
    props.setRunningState('hold')
}

const Main = (props) => {
    return (
        <div className="main">
            {props.appState === "text_to_speech" ? <InputField appState={props.appState} runningState={props.runningState} ></InputField> : <MicrophoneField runningState={props.runningState}></MicrophoneField>}
            <div className="Switcher">
                <div className="arrowIMG">
                    <img id="img1" onClick={() => props.appState === "text_to_speech" ? setStates1(props) : setStates0(props) } src={img} width="110"/>
                    <img id="img2" onClick={() => props.appState === "text_to_speech" ? setStates1(props) : setStates0(props) } src={img} width="110"/>
                </div>
                <div className="switching_buttons">
                    <button onClick={() => props.runningState === "hold" ? props.setRunningState('run') : props.setRunningState('hold')} className="button-53">
                        {props.runningState === "hold" ? "Play" : "Stop" }
                    </button>
                </div>
            </div>
            {props.appState === "text_to_speech" ?  <AudioField runningState={props.runningState}></AudioField> : <InputField appState={props.appState} runningState={props.runningState}></InputField>}
        </div>
    );
}

export default Main;