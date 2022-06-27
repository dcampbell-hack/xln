import React, { useState } from 'react';
import { LinkNoPaddingL } from '../../buttons/links';
import Form from '../../forms/index';
//import { Button } from '../../buttons/buttons';



const FormLayout = ({ options: { standard, title, warning, warningLink: { text, to, icon, show, external }, description, image, formData  } }) => {
    const [values, setValues] = useState({});
    
    return(
        <div className={`util-form-layout`}>
            <div className='two-panel-text'>
                <h2>{title}</h2>
                <div className="form-container">
                  <Form formData={formData} setValues={setValues} values={values} />
                </div>
                <i>{warning} <LinkNoPaddingL text={text} url={to} icon={icon} show={show} external={external} /></i>
                <br/>
                {formData.action == "login" && <i>Forgot Password?</i>}
            </div>
        </div>
    )

}

export default FormLayout;