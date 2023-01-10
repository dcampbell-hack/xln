import {useState, useEffect, useCallback } from 'react';
import TruncateText from '../utils/text/truncate';
import { Link } from 'react-router-dom';
import { PrimaryL, LightL, LinkL } from '../utils/buttons/links';
import { useSearchParams } from "react-router-dom";

// header: { logo, links: {logoLink, isAuthenticated: { XLNWallet }, crowd: { buyXLN, XLNWhitepaper } } 

const Header = ({ auth, users, blockchain, xln, landing, header: {logo, links: { logoLink, isAuthenticated, crowd } },isLoggedIn }) => {
   const [ profile, setProfile] = useState({ })
    let [searchParams, setSearchParams] = useSearchParams();
    const [ menu, setMenu] = useState(false)

    const showHeader = () => {
        //setSearchParams("xln")
        //window.location.pathname
      return false
    }

useEffect(() => {
  if( auth.address !== "" && users.avatar !== ""){
     setProfile({
         active: true,
         address: auth.address,
         balance: auth.balance,
         username: users.username,
         avatar: users.avatar,
         cover: users.cover
     })
  }
}, [])

const mapCrowd = () => crowd.map(({text, to, icon, action, show, external }) => <LinkL key={to} text={text} url={to} click={ action || {}} icon={icon} show={show} external={external} />);

const mapIsAuthenticated = () => isAuthenticated.map(({text, to, icon, action, show, external }) => <LinkL key={to} text={text} url={to} click={ action || {}} icon={icon} show={show} external={external} />);


    return(
        <div className="">
            <div className="xln-header header-padding">
                <div className="header-profile">
                <Link to={logoLink}>
              <div className={` xln-logo ${`header-image-${profile.active ? 'active' : 'none' }`}`} 
              style={{ backgroundSize: 'cover', backgroundImage: `url(${!profile.active ? logo : `${process.env.PUBLIC_URL}/uploads/${user.username}/${user.avatar}`  })` }} >
              </div>
              </Link>

              { blockchain.address && <div className="header-address">
             <TruncateText text={blockchain?.address || ''} charLimit={10} expand={false} />
            </div> }
   
            </div>

            <div className="header-icon">
              <button className="toggle-menu" onClick={() => setMenu(!menu)}><i class={ menu ?  "fa-sharp fa-solid fa-caret-down" : "fa-solid fa-bars"}></i></button>
        { menu &&
              <div className="xln-links">
                  { users.isAuthenticated == false ?
                <div className="xln-buy">
                    { mapCrowd() }
                </div>
                :
                <div className="xln-public">
                    { mapIsAuthenticated() }
                </div>
               }
            </div>
}
          </div>
          </div>
        </div>
    )
}

export default Header;