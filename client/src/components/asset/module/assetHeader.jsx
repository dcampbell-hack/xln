const AssetHeader = ({ logo, name }) => {
    return(
        <div className="profile-container">
        <div className="profile-items">
        <div className="profile-image">
           <img src={logo} width="100px" height="auto" />    
        </div>
        <div className="asset-profile-header">
            <h2>Hello , {name}</h2>  
        </div>  
        </div>
    </div>
    )
}

export default AssetHeader;