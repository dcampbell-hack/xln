import { PrimaryB, InfoB, WarningB, DangerB, LinkB } from "../../utils/buttons/buttons";


export const Swap = () => {

    return (
      <div className="wallet-swap-container">
        <div className="wallet-swap-admin">
          <button>Swap</button>
          <button>Pool</button>
          <button>Vote</button>
          <button>Charts</button>
        </div>
  
        <div className="wallet-swap-exchange">
          <h2>Swap</h2>
          <div>
            <div className="wallet-swap-field">
              <input type="number" placeholder="0.00" />
              <div className="form-control-container">
                <div className="dropdown_input">
                  <input
                    list="list"
                    id="list-id"
                    name="coin"
                    placeholder=""
                    onChange={(e) => e}
                  />
                </div>
                <datalist id="list">
                  <option value="ETH" />
                  <option value="XLN" />
                  <option value="DGB" />
                  <option value="KMD" />
                </datalist>
              </div>
            </div>
  
            <div className="wallet-swap-field">
              <input type="number" placeholder="0.00" />
              <div className="form-control-container">
                <div className="dropdown_input">
                  <input
                    list="list"
                    id="list-id"
                    name="coin"
                    placeholder=""
                    onChange={(e) => e}
                  />
                </div>
                <datalist id="list">
                  <option value="ETH" />
                  <option value="XLN" />
                  <option value="DGB" />
                  <option value="KMD" />
                </datalist>
              </div>
            </div>
  
            <div></div>
  
            <div className="wallet-swap-btn">
              <PrimaryB text="Swap" className="btn-block" />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    );
  };