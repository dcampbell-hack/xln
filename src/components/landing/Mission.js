import Point from '../utils/layout/Point';


const Mission = ({ mission: { header, content, phases }}) => {

const mapPhases = () => phases.map(({ id, title, description}) => <Point key={id} title={title} description={description} />)

    return(
        <div className="xln-mission panel-padding">
            <div className="mission-statement">
                <h1>{header}</h1>
                <p>
                    {content}
                </p>
            </div>
            <div className="mission-phase">
               { mapPhases() }
            </div>
            <div className='mission-photo'>
                <img src="" />
            </div>
        </div>
    )
}

export default Mission;