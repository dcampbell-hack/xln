import React, { useState } from 'react'
import { LinkNoPaddingL } from '../../buttons/links';
import TemplateLayout from './elements/layout'

import '../../../../css/templates/wallet.scss'

const Template = ({ options: { standard, images,  title, forgotPassword, forgotPasswordLink,  warning, warningLink: { text, to, icon, show, external }, description, image, templateData  } }) => {
    const [values, setValues] = useState({});


const renderTemplates = () => templateData.map((data, index) => <TemplateLayout key={index} templateData={data} /> )

    return(
        <div className={`util-template-layout`}>
            <div className='two-panel-text'>

                { renderTemplates() }

                {/* <TemplateLayout templateData={templateData} /> */}
                {/* <h2>{title}</h2>
                <div className="template-container">
                  <TemplateLayout templateData={templateData} setValues={setValues} values={values} />
                </div>
                <i>{warning} <LinkNoPaddingL text={text} url={to} icon={icon} show={show} external={external} /></i>
                <br/>
                {templateData.action == "login" && <i>
                    { forgotPassword } <LinkNoPaddingL text={forgotPasswordLink.text} url={forgotPasswordLink.to} icon={forgotPasswordLink.tcon} show={forgotPasswordLink.show} external={forgotPasswordLink.external} /> 
                </i>
                } */}
            </div>
        </div>
    )
}

export default Template;