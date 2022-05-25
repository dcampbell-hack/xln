const SetAssetPermissions = () => {


const permissions = [
  { 
    label: "Sell Shares in Asset"
  },
  { 
    label: "Only shareholders can access Asset"
  },
  { 
    label: "Allow shareholder to share as themselves"
  },
  { 
    label: "Else must share as owners avatar boolean"
  },
  { 
    label: "Shareholder can share asset"
  },
  { 
    label: "Copy and paste enabled"
  },
  { 
    label: "Link eternally"
  },
  { 
    label: "send GET, POST, PATCH, UPDATE, DELETE request"
  },
  { 
    label: "Show teaser"
  },
  { 
    label: "Charge for likes"
  },
  { 
    label: "Charge for comments"
  },
  { 
    label: "Display asset link to non shareholders"
  },
  { 
    label: "Shareable to any other streams"
  },
  { 
    label: "Can be sent as a message"
  },
  { 
    label: "Can be advertised"
  },
]


const mapPermissions = () => permissions.map(({ label }) => <div className="checkbox-item permission">
<div className="permission-checkbox-container">
  <input type="checkbox" />
</div>
<div className="permission-name">
  <p>{label}</p>
</div>
</div>)

    return(
        <div className="asset-checkboxes">
        <p>Set Permission</p>
        <div className="checkbox">
          { mapPermissions() }
        </div>
      </div>
    )
}

export default SetAssetPermissions;