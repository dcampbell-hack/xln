import TruncateText from "../../utils//text/truncate";
import { PrimaryL } from "../../utils//buttons/links";

const TwoPanelTextImageCol = ({ options: { id, standard, title, description, image, clickable, charLimit, minimizeImage, button } }) => {

    return(
        <div className={`util-two-panel-col ${ standard && 'util-two-panel-reverse' }`}>
            <div className='two-panel-text'>
                <h1>{title}</h1>
                <TruncateText text={description} charLimit={280} />
                { clickable && <PrimaryL text={button.text} icon={button.icon} url={button.to} show={button.show} external={button.external} /> }
                </div>
            <div className={`two-panel-image`}>
                <div className={ `${minimizeImage && 'image-padding'}` }>
                   <img src={image} width="100%" height="auto" />
                </div>
            </div>
        </div>
    )

}

export default TwoPanelTextImageCol;