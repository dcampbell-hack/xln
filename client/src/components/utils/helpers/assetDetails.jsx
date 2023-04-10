import { useEffect } from 'react'

import { category } from '../../../data/categories'
import { PrimaryB } from '../buttons/buttons'

export const AssetDetails = ({ assetType, users }) => {

    return(
      <>
            <div className="toggle-item">
              <b>assetType:</b> <span>{assetType}</span>
            </div>
            <div className="toggle-item">
              <b>category:</b> <span>{ category.find(({ name }) => name === assetType).suggestion.map(label => label + ", ") }</span>
            </div>
            <div className="toggle-item">
              <b>description:</b>{" "}
              <span>{`${assetType} asset created by ${
                users.username
              } on ${new Date(Date.now()).toDateString()}.`}</span>
            </div>
            <div className="toggle-item">
              <b>website:</b> <span>{users.website}</span>
            </div>
            <div className="toggle-item">
              <b>price:</b> <span>{users.assetPrice} XLN</span>
            </div>
            <div className="toggle-item">
              <b>stock:</b> <span>{users.stockLimit}</span>
            </div>
            <div className="toggle-item">
              <b>fee:</b> <span>{ users.assetPrice * 0.03} XLN</span>
            </div>
            <div className="toggle-edit">
              <PrimaryB text="Edit Asset Details" icon="" action={() => console.log("Open Modal to Edit")} />
            </div>
      </>
    )
}