import React from 'react'
import Avatar from '../avatar';
import { useNavigate } from "react-router-dom";

export const AssetItem = ({
    id,
    username,
    avatar,
    cover,
    height,
    width,
  }) => {
    return (
      <div
        key={id}
        onClick={() => navigate(`/xln/assets/id`, { replace: true })}
        style={{
          background: `url(/uploads/${username}/asset/${cover})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="asset-item asset"
      >
        <Avatar
          username={username}
          avatar={avatar}
          width={width}
          height={height}
        />
      </div>
    );
  };

export default AssetItem;