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
                     <br/>{bio}
                     <br/>{responsibilities}
                     <br/>{manages}
                 </p>
             </div>
        </div>
    )
}

export default EmployeePanel;