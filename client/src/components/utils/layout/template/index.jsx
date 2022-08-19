import React, { useState } from 'react'
import { LinkNoPaddingL } from '../../buttons/links';
import TemplateLayout from './elements/layout'

import '../../../../css/templates/wallet.scss'

const Template = ({ blockchain, options: { templateData  } }) => {
    const [values, setValues] = useState({});


const renderTemplates = () => templateData.map((data, index) => <TemplateLayout key={index} blockchain={blockchain} templateData={data} /> )

    return(
        <div className={`util-template-layout`}>
            <div className='two-panel-text'>
                { renderTemplates() }
            </div>
        </div>
    )
}

export default Template;