import React from 'react'
import { Link, useNavigate, Route } from "react-router-dom";
import { NavBtn } from '../../../types'

export const AnchorTag:React.FC<NavBtn> = ({ className, text, url ="", icon, show, external }:NavBtn) => {   
    return (
        <Link to={url}  className={className} target={external ? "_blank" : "_self"}>
            { show && text + ' '}
            <i className={icon}></i> 
        </Link>
    )
}

export const PrimaryL = ({ text, url, icon, show, external }) => <AnchorTag className="btn btn-primary" text={text} url={url} icon={icon} show={show} external={external} />

export const LightL = ({ text, url, icon, show, external  }) => <AnchorTag className="btn btn-secondary" text={text} url={url} icon={icon} show={show} external={external} />

export const SuccessL = ({ text, url, icon, show, external  }) => <AnchorTag className="btn btn-success" text={text} url={url} icon={icon} show={show} external={external} />

export const DangerL = ({ text, url, icon, show, external  }) => <AnchorTag className="btn btn-danger" text={text} url={url} icon={icon} show={show} external={external} />

export const WarningL = ({ text, url, icon, show, external  }) => <AnchorTag className="btn btn-warning" text={text} url={url} icon={icon} show={show} external={external} />

export const InfoL = ({ text, url, icon, show, external  }) => <AnchorTag className="btn btn-info" text={text} url={url} icon={icon} show={show} external={external} />

export const DarkL = ({ text, url, icon, show, external  }) => <AnchorTag className="btn btn-solid" text={text} url={url} icon={icon} show={show} external={external} />

export const LinkL = ({ text, url, icon, show, external, amount, className  }) => <AnchorTag className={"btn btn-link " + className } text={text} url={url} icon={icon} show={show} external={external} amount={amount} />

export const LinkNoPaddingL = ({ text, url, icon, show, external  }) => <AnchorTag className="btn btn-link-no-padding" text={text} url={url} icon={icon} show={show} external={external} />

export const VerticalButtonL = ({ text, url, icon, show, external, amount, className  }) => <AnchorTag className={"btn btn-link " + className } text={text} url={url} icon={icon} show={show} external={external} amount={amount} />


export const AssetLink = ({ name, icon, url}) => <div className='create-xln-item'>
<Link to={url}>
<div className='xln-item-icon'>
  <i className={icon}></i>
</div>
<div className='xln-item-name'>
  {name }
</div>
</Link>
</div>