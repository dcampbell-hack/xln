import React from 'react'
import {
    AssetLink
  } from "../../utils/buttons/links"
import { assetTypes } from '../../../data/nav'


 const CreateAsset: React.FC = () => {

    return(
      <div className='create-xln-asset'>
        { assetTypes.map(({ name, icon, url }, index) => <AssetLink key={index} text={name} icon={icon} url={url} />) }
      </div>
    )
  }

  export default CreateAsset