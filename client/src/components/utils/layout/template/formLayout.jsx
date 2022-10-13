import React, { useState, useEffect } from 'react';
import { LinkNoPaddingL } from '../../buttons/links';
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
    const [ showConversion, setShowConversion ] = useState(false)
    const [ totalSupply, setTotalSupply ] = useState(0);
    //const [  ] = useState(0);
    const [ conversion, setConversion ] = useState(0);
    const [ exchange, setExchange ] = useState(0);

    let amountPerDAI = 15;
    let conversionRate = 0.07;

    useEffect(() => {
        setTotalSupply(5444444671);
        setConversion(15);
        const conversionRate = 0.07;
    }, [])


    
    return(
        <div className={`util-form-layout`}>
            <div className='two-panel-text'>
                <h2>{ !showConversion && to == '/buy' ? (`${values?.buyxln > 0 ? Number(values?.buyxln).toLocaleString() : 0} DAI / ${ ( Number(values?.buyxln  * amountPerDAI) <= 0 ) || ( Number(values?.buyxln  * amountPerDAI) >= totalSupply ) ? 0 : Number(values?.buyxln  * amountPerDAI).toLocaleString() } XLN`) : title} </h2>
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