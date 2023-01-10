import { socialLinks } from '../../data/nav';
import { LightL } from '../utils/buttons/links';
import { mapSocialMediaAnchorTagsIcons } from '../utils/operations/dry';

const Footer = ({ footer: { logo, copyright, year } }) => {


    return (
        <div className="xln-footer">
            <div className="xln-logo">
                <img src={logo} height="50px" />
            </div>
            <div className="xln-social-media">
                <div className="xln-sm-text"><small>{copyright} {year}</small></div>
                <div className="xln-sm-links">{  mapSocialMediaAnchorTagsIcons(socialLinks) }</div>
            </div>
        </div>
    )
}

export default Footer;