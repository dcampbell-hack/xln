import { useState, useEffect } from "react";
import {
  PrimaryB,
  InfoB,
  WarningB,
  DangerB,
} from "../../../../utils/buttons/buttons";
import FormatLayout from "../../../index";

export const BuyShare = ({
    setShowForm,
    blockchain: { price, supply, showForm },
    options: { images, action, submit, description, form, bid },
    setActionType,
  }) => {
    const [amount, setAmount] = useState(price);
  
    useEffect(() => {
      // This if conditional doesn't make any sense
      if (amount <= price) {
        setAmount(price);
      }
    }, [price]);
  
    return (
      <div className="buy-xln-container">
        <div className="mint-asset-image">
          <img
            src={images.cityAds.url}
            width={images.cityAds.width}
            height={images.cityAds.height}
          />
        </div>
  
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
              <div className="mint-asset-text" onClick={(e) => setShowForm()}>
                <h2>
                  {" "}
                  ${amount} DAI <i className="fas fa-edit"></i>
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
              payload={{ amount }}
            />
          </div>
        )}
      </div>
    );
  };
  