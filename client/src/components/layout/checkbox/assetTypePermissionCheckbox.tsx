import React from 'react'


const AssetPermissionTypeCheckbox: React.FC = () => {
   return(
    <div className="asset-type-">
    <h4>Asset Permission Type</h4>
    <div className="asset-types">
      <div className="asset-type-item">Text</div>
      <div className="asset-type-item">Video</div>
      <div className="asset-type-item">Image</div>
      <div className="asset-type-item">Audio</div>
      <div className="asset-type-item">Link</div>
      <div className="asset-type-item">Live Events</div>
      <div className="asset-type-item">Metaverse</div>
    </div>
  </div>
   )
}

export default AssetPermissionTypeCheckbox;