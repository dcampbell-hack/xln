import React from 'react'
import Avatar from '../avatar';

const AssetImageItem =  ({ id, username,  avatar, cover, height, width }) => {
    return(
        <div key={id} style={{ background: `url(/uploads/${username}/asset/${cover})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="asset-item asset">
        
    <Avatar username={username} avatar={avatar} width={width} height={height} />
         
        </div>
    )
}

export default AssetImageItem;