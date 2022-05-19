const Avatar = ({ username, avatar}) => {
    return(
        <div className="permission-label-container">
        <div className="permission-label">
            <img src={`/uploads/${username}/avatar/${avatar}`} width="100%" height="auto" />
        </div>  
        </div>
    )
}

export default Avatar;