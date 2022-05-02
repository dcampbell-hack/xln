import React, { useState } from 'react';
import { LinkL } from '../../buttons/links';
import Form from '../../forms/index';
//import { Button } from '../../buttons/buttons';



const TwoPanelImageForm = ({ options: { standard, title, warning, warningLink: { text, to, icon, show, external }, description, image, formData  } }) => {
    const [values, setValues] = useState({});
    
    return(
        <div className={`util-two-panel ${ standard && 'util-two-panel-reverse' }`}>
            <div className='two-panel-text'>
                <h1>{title}</h1>
                <i>{warning}<LinkL text={text} url={to} icon={icon} show={show} external={external} /></i>
                <p>{description}</p>
                <div className="form-container">
                  <Form formData={formData} setValues={setValues} values={values} />
                </div>
            </div>
            <div className='two-panel-image'>
                <img src={image} width="100%" height="auto" />
            </div>
        </div>
    )

}

export default TwoPanelImageForm;