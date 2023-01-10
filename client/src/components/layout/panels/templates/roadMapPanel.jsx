import TruncateText from "../../../utils/text/truncate";

const RoadMapPanel = ({ timePeriod, months, description}) => {
   return(
    <div className="xln-roadmap-panel">
        <h2>{timePeriod}</h2>
        <div className="xln-roadmap-bar-container">
            <div className="xln-roadmap-bar"></div>
            <div className="xln-roadmap-bar-icon"></div>
        </div>
        <TruncateText text={description} charLimit="270" />
    </div>
    )
}

export default RoadMapPanel;