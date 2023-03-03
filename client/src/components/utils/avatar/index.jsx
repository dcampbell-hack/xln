const Avatar = ({ userId, username, avatar, width, height}) => {
    return(
        <div  className="permission-label-container" style={{ width, height }}>
            <div className="permission-label">
            <img src={`/uploads/${userId}/avatar/${avatar}`} width={width} height={height} />
        </div>  
</div>
    )
}

export default Avatar;