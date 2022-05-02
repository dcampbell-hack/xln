import {useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { PrimaryL, LightL, LinkL } from '../utils/buttons/links';
import { useSearchParams } from "react-router-dom";

// header: { logo, links: {logoLink, isAuthenticated: { XLNWallet }, crowd: { buyXLN, XLNWhitepaper } } 

const Header = ({ auth, user, xln, landing, header: {logo, links: { logoLink, isAuthenticated, crowd } },isLoggedIn }) => {
   const [ profile, setProfile] = useState({ })
    let [searchParams, setSearchParams] = useSearchParams();

    const showHeader = () => {
        //setSearchParams("xln")
        //window.location.pathname
      return false
    }

useEffect(() => {
  if( auth.address !== "" && user.avatar !== ""){
     setProfile({
         active: true,
         address: auth.address,
         balance: auth.balance,
         username: user.username,
         avatar: user.avatar,
         cover: user.cover
     })
  }
}, [])

const mapCrowd = () => crowd.map(({text, to, icon, action, show, external }) => <LinkL key={to} text={text} url={to} click={ action || {}} icon={icon} show={show} external={external} />);

const mapIsAuthenticated = () => isAuthenticated.map(({text, to, icon, action, show, external }) => <LinkL key={to} text={text} url={to} click={ action || {}} icon={icon} show={show} external={external} />);


    return(
        <div className="">
            { window.location.pathname !== '/assets/create' &&
            <div className="xln-header header-padding">
                <div className="header-profile">
                <Link to={logoLink}>
              <div className={` xln-logo ${`header-image-${profile.active ? 'active' : 'none' }`}`} style={{ backgroundSize: 'cover', backgroundImage: `url(${!profile.active ? logo : `${process.env.PUBLIC_URL}/uploads/${user.username}/${user.avatar}`  })` }} >
              </div>

              </Link>
             { auth.isAuthenticated && <div className="header-avatar-stats">
                  <i>{user.username}</i>
                  <b>{Number(auth.profile.balance).toFixed(5)} ETH</b>
            </div> }
            </div>
              <div className="">
                  { !isLoggedIn.success ?
                <div className="xln-buy">
                    { mapCrowd() }
                </div>
                :
                <div className="xln-public">
                    { mapIsAuthenticated() }
                </div>
               }
            </div>
          </div>
}
        </div>
    )
}

export default Header;