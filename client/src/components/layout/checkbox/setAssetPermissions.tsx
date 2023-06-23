import React from 'react'

const SetAssetPermissions: React.FC = ({ formInput, updateForm }) => {

const permissions = [
  { 
    id: 1,
    selected: false,
    label: "Sell Shares in Asset"
  },
  { 
    id: 2,
    selected: false,
    label: "Only shareholders can access Asset"
  },
  { 
    id: 3,
    selected: false,
    label: "Allow shareholder to share as themselves"
  },
  { 
    id: 4,
    selected: false,
    label: "Else must share as owners avatar boolean"
  },
  { 
    id: 5,
    selected: false,
    label: "Shareholder can share asset"
  },
  { 
    id: 6,
    selected: false,
    label: "Copy and paste enabled"
  },
  { 
    id: 7,
    selected: false,
    label: "Link eternally"
  },
  { 
    id: 8,
    selected: false,
    label: "send GET, POST, PATCH, UPDATE, DELETE request"
  },
  { 
    id: 9,
    selected: false,
    label: "Show teaser"
  },
  { 
    id: 10,
    selected: false,
    label: "Charge for likes"
  },
  { 
    id: 11,
    selected: false,
    label: "Charge for comments"
  },
  { 
    id: 12,
    selected: false,
    label: "Display asset link to non shareholders"
  },
  { 
    id: 13,
    selected: false,
    label: "Shareable to any other streams"
  },
  { 
    id: 14,
    selected: false,
    label: "Can be sent as a message"
  },
  { 
    id: 15,
    selected: false,
    label: "Can be advertised"
  },
]


const mapPermissions = () => permissions.map((permission, index) => <div key={index} className="checkbox-item permission">
<div className="permission-checkbox-container">
  <input type="checkbox" onChange={() => updateForm({ ...formInput, permissions: [ ...formInput.permissions, permission ]})} />
</div>
<div className="permission-name">
  <p>{permission.label}</p>
</div>
</div>)

    return(
        <div className="asset-checkboxes">
        <p>Set Permission</p>
        <p>Determine how information on your avatar can be accessed.</p>
        <div className="checkbox">
          { mapPermissions() }
        </div>
      </div>
    )
}

export default SetAssetPermissions;