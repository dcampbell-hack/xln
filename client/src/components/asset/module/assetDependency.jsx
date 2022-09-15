import { useState } from 'react';
import CheckboxItem from "../../utils/layout/checkbox/imageAvatarCheckbox";
import Avatar from '../../utils/avatar';

const AssetDependency = ({  type, assets, setCheckbox, checkbox }) => {

const [ search, setSearch ] = useState('')

const mapAssets  = () => assets.filter(({ asset_name }) => asset_name.includes(asset_name)  ).map(({ id, username, asset_name, avatar, cover  }) => <CheckboxItem key={id} username={username} assetName={asset_name} avatar={avatar} cover={cover} setCheckbox={setCheckbox} checkbox={checkbox} />)

const mapAvatars  = () => assets.filter(({ asset_name }) => asset_name  ).map(({ id, username, avatar  }) => <Avatar key={id} username={username} avatar={avatar} setCheckbox={setCheckbox} checkbox={checkbox} />)


    return(
        <div className="asset-dependency-container">
        <div className="asset-search">
           <input type="text" placeholder={`Search ${type == 'assets' ? 'Assets' : 'Users' }`} value={search} onChange={(e) => setSearch(e.target.value)} />
        </div> 
        <div className="asset-list">
           { type == 'assets' ? mapAssets() : mapAvatars() }
        </div>
        
    </div>
    )
}

export default AssetDependency;