import { LightL } from '../utils/buttons/links';

const Footer = ({ footer: { logo, copyright, year }, socialLinks }) => {

const mapSocial = () => socialLinks.map(social => <LightL text={social[0]} url={social[1]} icon={social[2]} click="" show={false} external={true} />)

    return (
        <div className="xln-footer">
            <div className="xln-logo">
                <img src={logo} height="50px" />
            </div>
            <div className="xln-social-media">
                <div className="xln-sm-text"><small>{copyright} {year}</small></div>
                <div className="xln-sm-links">{ mapSocial() }</div>
            </div>
        </div>
    )
}

export default Footer;