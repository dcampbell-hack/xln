import {
    DangerL,
    LinkL,
    PrimaryL,
    InfoL,
    VerticalButtonL,
    AssetLink
  } from "../../../utils/buttons/links"
import { assetTypes } from '../../../../data/nav'


 const CreateAsset = () => {

    return(
      <div className='create-xln-asset'>
        { assetTypes.map(({ name, icon, url }, index) => <AssetLink key={index} name={name} icon={icon} url={url} />) }
      </div>
    )
  }

  export default CreateAsset