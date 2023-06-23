import React from 'react'
import { LinkL, LightL } from '../utils/buttons/links';
import { mapSocialMediaAnchorTagsIcons } from '../utils/operations/dry';

import { CTAProps } from '../../types/landing';

interface CTAWrap {
    cta: CTAProps,
    socialLinks: string[]
}

const CTA: React.FC<CTAWrap> = ({ cta : { mission, image, url }, socialLinks = [] }) => {
    return(
        <div className="xln-cta panel-padding">
           <div className="cta-text">
               <h1>{mission}</h1>
               <a href={url.to} className="btn-link" target="_blank">
                   {url.text + " "} 
                   <i className={url.icon}></i>
                   </a>
               <div className="cta-social-links">
                 { mapSocialMediaAnchorTagsIcons(socialLinks)  }
               </div>
           </div>
           <div className="cta-image">
               <img src={image} height="auto" width="100%" /> 
           </div>
        </div>
    )
}

export default CTA;