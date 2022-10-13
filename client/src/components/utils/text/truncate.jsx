import { useState } from 'react';


const TruncateText = ({ id, text, charLimit, expand = true }) => {

const [ showText, setShowText ] = useState(false);

const textLength = text.length;

const renderFinalText = (textField) => {
    let finalText;
    if(textLength > charLimit && !showText){
       finalText = `${textField.slice(0, charLimit)} ...`;
    } else {
        finalText = textField
    }
    return (
    <div>
        <p>
        {finalText}
        </p>
    </div>
    );
}

const initText = () => {
       return renderFinalText(text);
}
    return(
        <div className='truncate-text'>
            { initText() }
           { expand && <button className="btn truncate-btn" onClick={() => setShowText(!showText)}>{ showText ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i> }</button> }
        </div>
    )
}


export default TruncateText;