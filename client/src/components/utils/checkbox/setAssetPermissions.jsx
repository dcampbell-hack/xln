const SetAssetPermissions = () => {
    return(
        <div className="asset-checkboxes">
        <p>Set Permission</p>
        <div className="checkbox">
          <div className="checkbox-item permission">
            <div className="permission-checkbox">
              <input type="checkbox" />
            </div>
            <div className="permission-label">
              <p>Sell Shares in Asset </p>
            </div>
          </div>

          <div className="checkbox-item permission">
            <div className="permission-checkbox">
              <input type="checkbox" />
            </div>
            <div className="permission-label">
              <p>Only shareholders can access Asset</p>
            </div>
          </div>

          <div className="checkbox-item permission">
            <div className="permission-checkbox">
              <input type="checkbox" />
            </div>
            <div className="permission-label">
              <p>Allow shareholder to share as themselve</p>
            </div>
          </div>

          <div className="checkbox-item permission">
            <div className="permission-checkbox">
              <input type="checkbox" />
            </div>
            <div className="permission-label">
              <p>Else must share as owners avatar boolean</p>
            </div>
          </div>

          <div className="checkbox-item permission">
            <div className="permission-checkbox">
              <input type="checkbox" />
            </div>
            <div className="permission-label">
              <p>Shareholder can share asset</p>
            </div>
          </div>

          <div className="checkbox-item permission">
            <div className="permission-checkbox">
              <input type="checkbox" />
            </div>
            <div className="permission-label">
              <p>Copy and paste enabled</p>
            </div>
          </div>

          <div className="checkbox-item permission">
            <div className="permission-checkbox">
              <input type="checkbox" />
            </div>
            <div className="permission-label">
              <p>Link eternally</p>
            </div>
          </div>

          <div className="checkbox-item permission">
            <div className="permission-checkbox">
              <input type="checkbox" />
            </div>
            <div className="permission-label">
              <p>send GET, POST, PATCH, UPDATE, DELETE request</p>
            </div>
          </div>

          <div className="checkbox-item permission">
            <div className="permission-checkbox">
              <input type="checkbox" />
            </div>
            <div className="permission-label">
              <p>Display date created</p>
            </div>
          </div>

          <div className="checkbox-item permission">
            <div className="permission-checkbox">
              <input type="checkbox" />
            </div>
            <div className="permission-label">
              <p>Show teaser</p>
            </div>
          </div>

          <div className="checkbox-item permission">
            <div className="permission-checkbox">
              <input type="checkbox" />
            </div>
            <div className="permission-label">
              <p>Charge for likes</p>
            </div>
          </div>

          <div className="checkbox-item permission">
            <div className="permission-checkbox">
              <input type="checkbox" />
            </div>
            <div className="permission-label">
              <p>Charge for comments</p>
            </div>
          </div>

          <div className="checkbox-item permission">
            <div className="permission-checkbox">
              <input type="checkbox" />
            </div>
            <div className="permission-label">
              <p>Display asset link to non shareholders</p>
            </div>
          </div>

          <div className="checkbox-item permission">
            <div className="permission-checkbox">
              <input type="checkbox" />
            </div>
            <div className="permission-label">
              <p>Shareable to any other streams</p>
            </div>
          </div>

          <div className="checkbox-item permission">
            <div className="permission-checkbox">
              <input type="checkbox" />
            </div>
            <div className="permission-label">
              <p>Can be sent as a message</p>
            </div>
          </div>

          <div className="checkbox-item permission">
            <div className="permission-checkbox">
              <input type="checkbox" />
            </div>
            <div className="permission-label">
              <p>Can be advertised</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default SetAssetPermissions;