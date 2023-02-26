import './InputField.css';
import img from "../../assets/images/pencil.png"
const InputField = (props) => {
  return (
    <div className="inputField">
      <div className="innerBox">
        <textarea rows="13" cols="25" disabled={props.appState === "text_to_speech" ? false: true}>
        </textarea>
        <br>
        </br>
        <img src={img} width="100px"/>
      </div>
    </div>
  );
};
export default InputField;
