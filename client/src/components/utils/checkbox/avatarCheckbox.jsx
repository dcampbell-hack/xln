const AvatarCheckbox = () => {
    return(
        <div className="checkbox-item username">
        <div className="permission-checkbox">
          <input type="checkbox" />
        </div>
        <div className="permission-label">
          <img src={cover} width="100px" height="auto" />
          <p>@username</p>
        </div>
      </div>
    )
}

export default AvatarCheckbox;