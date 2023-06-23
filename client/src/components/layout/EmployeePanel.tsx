import React, { memo } from "react";
import TruncateText from "../utils/text/truncate";
import { TeamProps, MemberProp } from "../../types/landing";

const EmployeePanel: React.FC = memo(({ image, name, position, bio, responsibilities, manages  }: MemberProp) => {
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
})

export default EmployeePanel;