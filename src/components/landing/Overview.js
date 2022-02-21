import FormatLayout from "../utils/layout";


const Overview = ({ overview }) => {

const mapOverviews = () => overview.map(({type, options}, index) => <FormatLayout key={index} type={type} options={options} />)

    return(
        <div className="xln-overview panel-padding">
           { mapOverviews() }
        </div>
    )
}

export default Overview;