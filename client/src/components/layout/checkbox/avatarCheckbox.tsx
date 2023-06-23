import React from 'react'

const AvatarCheckbox: React.FC = ({ cover }) => {
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