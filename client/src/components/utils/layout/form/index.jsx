import React, { useState } from 'react';
import { LinkNoPaddingL } from '../../buttons/links';
import Form from '../../forms/index';
//import { Button } from '../../buttons/buttons';



const FormLayout = ({ options: { standard, title, forgotPassword, forgotPasswordLink,  warning, warningLink: { text, to, icon, show, external }, description, image, formData  } }) => {
    const [values, setValues] = useState({});
    const [ showConversion, setShowConversion ] = useState(false)
    const [ conversion, setConversion ] = useState(0);
    const [ exchange, setExchange ] = useState(0);

    const totalSupply = 5444444671;
    const amountPerETH = 57957;
    const conversionRate = 0.07;

    function buyXLN(){
        const calcConversion = () =>  values.buyxln * amountPerETH;
        const cashConversion = () => values.xln * conversionRate;

        setConversion(calcConversion);
        setExchange(cashConversion);
        setShowConversion(true)
        setValues({ ...values, action: buyXLN})
    }


    
    return(
        <div className={`util-form-layout`}>
            <div className='two-panel-text'>
                <h2>{ !showConversion && to == '/buy' ? (`${values?.buyxln} ETH = ${ +(values.buyxln)  * amountPerETH} XLN`) : title} </h2>
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