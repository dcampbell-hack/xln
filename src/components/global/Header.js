
import { Link } from 'react-router-dom';
import { PrimaryL, LightL } from '../utils/buttons/links'

const Header = ({ header: { logo, links: {logoLink, buttons: { buyXLN, XLNWhitepaper}} } }) => {
    return(
        <div className="xln-header header-padding">
              <div className="xln-logo">
                  <Link to={logoLink}>
                   <img src={logo} height="80px" width="auto" />
                  </Link>
              </div>
              <div className="xln-buy">
                   <PrimaryL text={buyXLN.text} url={buyXLN.to} icon={buyXLN.icon} click="" show={buyXLN.show} external={buyXLN.external} />
                   <LightL text={XLNWhitepaper.text} url={XLNWhitepaper.to} icon={XLNWhitepaper.icon} click="" show={XLNWhitepaper.show} external={XLNWhitepaper.external} />

              </div>
        </div>
    )
}

export default Header;