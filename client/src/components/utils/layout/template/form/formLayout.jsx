import React, { useState, useEffect } from 'react';
import { LinkNoPaddingL } from '../../../buttons/links';
import Form from './form';
//import { Button } from '../../buttons/buttons';



const FormLayout = ({ 
    options: {
         standard, 
         title, 
         forgotPassword, 
         forgotPasswordLink,  
         warning, 
         warningLink: { text, to, icon, show, external }, 
         description, 
         image, 
         formData, 
     } 
        }) => {
    const [values, setValues] = useState({ errors: []});

    console.log('Form-Layout', formData.action)
    
    return(
        <div className={`util-form-layout`} style={ formData.action !== "updateSupply" ? { height: 'auto'} : { height: 'auto' }}>
            <div className='two-panel-text'>
                <h2>{ title }</h2>
                <div className="form-container">
                  <Form formData={formData} setValues={setValues} values={values} />
                </div>
                <i>{warning} <LinkNoPaddingL text={text} url={to} icon={icon} show={show} external={external} /></i>
                <br/>
                {formData.action == "login" && <i>
                    { forgotPassword } <LinkNoPaddingL text={forgotPasswordLink.text} url={forgotPasswordLink.to} icon={forgotPasswordLink.tcon} show={forgotPasswordLink.show} external={forgotPasswordLink.external} /> 
                </i>
                }
            </div>
        </div>
    )

}

export default FormLayout;