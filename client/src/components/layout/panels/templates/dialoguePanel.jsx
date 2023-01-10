import { useEffect } from "react";
import { PrimaryB, LightB, SuccessB, DangerB, DarkB,InfoB, WarningB} from '../../../utils/buttons/buttons';
import { PrimaryL, LightL, SuccessL, DangerL, DarkL, InfoL, WarningL } from "../../../utils/buttons/links";

const DialoguePanel = ({ avatar, to, show, action, path, type, select, error }) => {

useEffect(() => {
  console.log('Do something in Dialog Panel' )
}, [])

    return (
        <div className="dialogue-panel card">
            <div className="dialogue-panel-avatar">
                {/* <img src={`${process.env.PUBLIC_URL}${path[0]}/icon/${avatar}`} width="100%" height="auto" /> */}
            </div>
            <div className="dialogue-panel-message">
                <h4>{error.header}</h4>
                <p>{error.detailed}</p>
               <div className="dialogue-panel-buttons">
                { error.button.link ?
                <DangerL text={error.button.label} url={to} icon="" click="" show={true} external={false } />
                :
                <DangerB text={error.button.label} click={action} />
                }
            </div>
            </div>
        </div>
    )
}

export default DialoguePanel;