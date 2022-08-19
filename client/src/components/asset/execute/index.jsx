import { useState } from 'react';
import { removeDups } from '../../utils/operations/dry';
import MedallionXLN from '../../../assets/logo/medallion_xln_logo.png';
import Gary from '../../../assets/founders/CAO-Executive.png';
import AssetLaunch from '../module/assetLaunch';
import AssetDependency from '../module/assetDependency';
import AssetHeader from '../module/assetHeader';
import AssetPermissionTypeCheckbox from '../../utils/checkbox/assetTypePermissionCheckbox';
import SetAssetPermissions from '../../utils/checkbox/setAssetPermissions';

const ExecuteAsset = ({ users }) => {

const [ checkbox, setCheckbox ] = useState([]);
console.log('Checkbox----------', checkbox)

const assets = [
{
   id: '1',
   selected: false,
   username: 'aloy',
   asset_name: 'horizon_zero_dawn',
   avatar: 'aloy-avatar.jpg',
   cover: 'horizon_zero_dawn_1.jpeg'
},
{
   id: '2',
   selected: false,
   username: 'v',
   asset_name: 'cyberpunk_2077',
   avatar: 'v-cyberpunk-avatar.jpeg',
   cover: 'night-city-asset.jpeg'
},
{
   id: '3',
   selected: false,
   username: 'satoshi',
   asset_name: 'bitcoin',
   avatar: 'satoshi-avatar.jpeg',
   cover: 'bitcoin.jpeg'
},
{
   id: '4',
   selected: false,
   username: 'aloy',
   asset_name: 'horizon_zero_dawn',
   avatar: 'aloy-avatar.jpg',
   cover: 'horizon_zero_dawn_2.jpeg'
},
{
   id: '5',
   selected: false,
   username: 'v',
   asset_name: 'cyberpunk_2077',
   avatar: 'v-cyberpunk-avatar.jpeg',
   cover: 'cyberpunk-2077-cover-asset.jpeg'
},
{
   id: '6',
   selected: false,
   username: 'satoshi',
   asset_name: 'bitcoin',
   avatar: 'satoshi-avatar.jpeg',
   cover: 'bitcoin_2.jpeg'
},
{
   id: '7',
   selected: false,
   username: 'aloy',
   asset_name: 'horizon_zero_dawn',
   avatar: 'aloy-avatar.jpg',
   cover: 'horizon_zero_dawn_3.jpeg'
},
{
   id: '8',
   selected: false,
   username: 'v',
   asset_name: 'cyberpunk_2077',
   avatar: 'v-cyberpunk-avatar-2.jpeg',
   cover: 'night-city-4-asset.jpeg'
},
{
   id: '9',
   selected: false,
   username: 'satoshi',
   asset_name: 'bitcoin',
   avatar: 'satoshi-avatar.jpeg',
   cover: 'bitcoin_4.jpeg'
}
];


const avatars = assets.map(({ username }) => username);

const uniqueAvatars = removeDups(avatars);

console.log('Unique Avatar --------', uniqueAvatars)

    return (
        <div className="asset-container">
               <AssetHeader logo={MedallionXLN} name={users.firstname} />
              { true && <AssetDependency type='assets' assets={assets} setCheckbox={setCheckbox} /> }
              { true && <AssetPermissionTypeCheckbox /> }
              { true && <SetAssetPermissions /> }
              { true && <AssetDependency type='users'  assets={assets} setCheckbox={setCheckbox} /> }
              { true && <AssetLaunch /> }

            </div>
    )
  }
  
  
  export default ExecuteAsset;