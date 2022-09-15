import { Link, useNavigate, Route } from "react-router-dom";

export const AnchorTag = ({ className, text, url ="", icon, show, external, amount=0 }) => {
//     let navigate = useNavigate();
//     console.log('Clicked button -------', text, url )

// if(external){
//    navigate(url)
// }
   
    return (
        <Link to={url}  className={className} target={external ? "_blank" : "_self"}>
            { show && text + ' '}
            { icon !== 'number' ?
            <i className={icon}></i> :
            <span className="badge">{ amount }</span>
             }
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