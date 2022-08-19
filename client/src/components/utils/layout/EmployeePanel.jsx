import TruncateText from "../text/truncate";

const EmployeePanel = ({ image, name, position, bio, responsibilities, manages }) => {
    return(
        <div className="util-employee-panel">
             <div className="panel-image">
                 <img src={image} width="100%" />
             </div>
             <div className="panel-text center white">
                 <h4>{name}</h4>
                 <p>
                     {position}
                  </p>
                     <TruncateText text={bio} charLimit={90} />

             </div>
        </div>
    )
}

export default EmployeePanel;