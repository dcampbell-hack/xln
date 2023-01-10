import { useState, useEffect } from "react";
import {
  PrimaryB,
  InfoB,
  WarningB,
  DangerB,
} from "../../../../utils/buttons/buttons";
import FormatLayout from "../../../index";


export const MintTokens = ({
    options: { images, action, submit, description, price, form, bid },
    setActionType,
  }) => {
    const [showForm, setShowForm] = useState(false);
    const [amount, setAmount] = useState(price);
  
    useEffect(() => {
      if (amount <= price) {
        setAmount(15);
      }
    }, [price]);
  
    return (
      <div className="buy-xln-container">
        <div className="mint-asset-image">225</div>
  
        <div className="buy-xln-tokens">
          <div>
            {showForm ? (
              <div>
                <div>
                  <FormatLayout type={form.type} options={form} />
                  {!showForm && (
                    <PrimaryB text={"Update"} className={submit.className} />
                  )}
                </div>
              </div>
            ) : (
              <div className="mint-asset-text" onClick={(e) => setShowForm(true)}>
                <h2>
                  {" "}
                  ${price} DAI <i className="fas fa-edit"></i>
                </h2>
              </div>
            )}
          </div>
        </div>
        {!showForm && (
          <div className="mint-asset-form">
            <PrimaryB
              text={submit.label}
              className={submit.className}
              click={() => setActionType(action)}
              payload={{ price }}
            />
          </div>
        )}
      </div>
    );
  };