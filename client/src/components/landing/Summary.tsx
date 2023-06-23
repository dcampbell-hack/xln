import React from 'react';
import { LinkL } from '../utils/buttons/links'

import { SummaryProps } from '../../types/landing';

interface SummaryWrap {
  summary: SummaryProps
}

const Summary: React.FC<SummaryWrap> = ({ summary: {content, url }}) => {

  return(
      <div className='xln-summary panel-padding'>
          <div className='summary-content'>
          <h4>
            {content}
          </h4>
          <a href={url.to} className="btn btn-link" target="_blank">{url.text} <i className={url.icon}></i></a>
          </div>
      </div>
  )
}

export default Summary;