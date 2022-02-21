import { LinkL, SecondaryL } from '../utils/buttons/links';
import { mapSocialMediaLinks, mapSocialMediaLightLinks } from '../utils/operations/dry';

const CTA = ({ cta : { mission, image, url }, socialLinks = [] }) => {
    return(
        <div className="xln-cta panel-padding">
           <div className="cta-text">
               <h1>{mission}</h1>
               <LinkL text={url.text} url={url.to} icon={url.icon} show={url.show} />
               <div className="cta-social-links">
                 { mapSocialMediaLightLinks(socialLinks)  }
               </div>
           </div>
           <div className="cta-image">
               <img src={image} height="auto" width="auto" /> 
           </div>
        </div>
    )
}

export default CTA;