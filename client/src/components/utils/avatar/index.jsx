const Avatar = ({ username, avatar, width, height}) => {
    return(
        <div  className="permission-label-container" style={{ width, height }}>
            <div className="permission-label">
            <img src={`/uploads/${username}/avatar/${avatar}`} width={width} height={height} />
        </div>  
</div>
    )
}

export default Avatar;