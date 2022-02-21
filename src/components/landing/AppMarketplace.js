import { LinkL, DarkL } from '../utils/buttons/links'

const AppMarketPlace = ({ appMarketplace: { header, icons, body, button }}) => {

const mapLinks = () => icons.map((icon, index) => <LinkL key={index} show={false} icon={icon} /> )

    return (
        <div className="xln-app-marketplace panel-padding">
            <div className="app-marketplace-header">
                <h1>{header}</h1>
            </div>
            <div className="app-marketplace-icons">
               {mapLinks()}
            </div>
            <div className="app-marketplace-form">
                <p>
                    {body}
                </p>
                <LinkL url="/" text={button.text} show={true} />
            </div>
          
        </div>
    )
}

export default AppMarketPlace;