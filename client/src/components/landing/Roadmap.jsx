import RoadMapPanel from "../utils/panels/templates/roadMapPanel";

const Roadmap = ({ roadMap: { header, roadmaps, phases } }) => {


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
