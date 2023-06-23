import React from "react";
import RoadMapPanel from "../layout/panels/templates/roadMapPanel";

import { RoadmapProps } from "../../types/landing";

interface RoadmapWrap {
  roadMap: RoadmapProps
}

const Roadmap: React.FC<RoadmapWrap> = ({ roadMap: { header, roadmaps } }) => {


const renderRoadmap = () => roadmaps.map(({ timePeriod, months, description }, index ) => <RoadMapPanel key={index} timePeriod={timePeriod} months={months} description={description} />)

  return (
    <div className="xln-roadmap panel-padding">
     <h1>{header}</h1>
     <div className="xln-roadmap-slider">
       { renderRoadmap() }
     </div>
    </div>
  );
};

export default Roadmap;
