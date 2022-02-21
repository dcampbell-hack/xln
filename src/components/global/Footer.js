const Footer = ({ footer: { logo, copyright, year }, socialLinks = [] }) => {

const social = () => socialLinks.map()

    return (
        <div className="xln-footer">
            <div className="xln-logo">
                <img src={logo} height="50px" />
            </div>
            <div className="xln-social-media">
                <div className="xln-sm-text"><small>{copyright} {year}</small></div>
                <div className="xln-sm-links">Twitter Telegram</div>
            </div>
        </div>
    )
}

export default Footer;