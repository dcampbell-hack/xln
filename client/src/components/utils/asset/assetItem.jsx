import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'
import Avatar from "../avatar";
import { useNavigate } from "react-router-dom";
import { getSingleAsset } from "../../../actions/assets/asset"

export const AssetItem = ({ 
  id, 
  assetType,
  type, 
  username, 
  avatar, 
  cover, 
  getSingleAsset,
  userId 
}) => {

  const navigate = useNavigate();
  const [endpoint, setEndpoint] = useState(type);

  const handleClick = async assetId => {
   await getSingleAsset(assetId)
   await navigate(`/xln/view/asset/${id}/${endpoint}`, { replace: true })
  }

  return (
    <div
      key={id}
      onClick={() => handleClick(id) }
      style={{
        background: `url(/uploads/${userId}/asset/${cover})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="asset-item asset"
    >
      <div className="asset-base">
      <Avatar
        userId={userId}
        username={username}
        avatar={avatar}
        width={"75px"}
        height={"75px"}
      />
      <div className="asset-tag">{ assetType }</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    assets: state.assets,
  };
};

const mapDispatchToProps = {
  getSingleAsset
};

export default connect(mapStateToProps, mapDispatchToProps)(AssetItem);
