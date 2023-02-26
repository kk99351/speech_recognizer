import './Top.css';
import img from '../assets/images/emoji.png'

const Top = () => {
    return (
        <div className="top">
            <h1>Speech Recognizer</h1>
            <img src={img} width="80"/>
        </div>
    );
}

export default Top;