import EmployeePanel from "../utils/layout/EmployeePanel";

const Team = ({ team: { header, members }}) => {

    const loopEmployees = () => members.map(({ image, name, position, bio, responsibilites, manages}, index) => <EmployeePanel key={index} image={image} name={name} position={position} bio={bio} responsibilites={responsibilites} manages={manages}  />)

    return(
        <div className="xln-team panel-padding">
            <h1>{header}</h1>
              <div className="team-container">
                 {loopEmployees()}
              </div>
        </div>
    )
}

export default Team;