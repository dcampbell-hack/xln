import EmployeePanel from "../layout/EmployeePanel";

const Team = ({ team: { header, members }}) => {

    const loopEmployees = () => members.map(({ image, name, position, bio, responsibilities, manages}, index) => <EmployeePanel key={index} image={image} name={name} position={position} bio={bio} responsibilities={responsibilities} manages={manages}  />)

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