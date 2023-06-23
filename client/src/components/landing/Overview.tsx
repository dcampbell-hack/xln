import React from "react";
import FormatLayout from "../layout";

import { OverviewProps } from "../../types/landing";


const Overview: React.FC<OverviewProps> = ({ overview }) => {

const mapOverviews = () => overview.map(({type, options}, index) => <FormatLayout key={index} type={type} options={options} />)

    return(
        <div className="xln-overview panel-padding">
           { mapOverviews() }
        </div>
    )
}

export default Overview;