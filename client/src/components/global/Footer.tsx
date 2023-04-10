import React from 'react';
import { socialLinks } from '../../data/nav';
import { mapSocialMediaAnchorTagsIcons } from '../utils/operations/dry';
import { FooterProps } from '../../types/index'

const Footer: React.FC<FooterProps> = ({ footer: { logo, copyright, year } }: FooterProps) => {


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