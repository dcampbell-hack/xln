import TruncateText from "../text/truncate";

const EmployeePanel = ({ image, name, position, bio, responsibilities, manages }) => {
    return(
        <div className="util-employee-panel">
             <div className="panel-image">
                 <img src={image} width="100%" />
             </div>
             <div className="panel-text">
                 <h4>{name}</h4>
                 <p>
                     {position}
                     <TruncateText text={bio} charLimit={90} />
                     <TruncateText text={responsibilities} charLimit={90} />
                     <TruncateText text={manages} charLimit={90} />
                  </p>
             </div>
        </div>
    )
}

export default EmployeePanel;