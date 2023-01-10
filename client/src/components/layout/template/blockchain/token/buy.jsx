
import {
  PrimaryB,
  InfoB,
  WarningB,
  DangerB,
} from "../../../../utils/buttons/buttons";
import FormatLayout from "../../../index";

export const BuyTokens = ({
    setShowForm,
    blockchain: { price, supply, showForm },
    options: { images, action, submit, description, header, balanceText, form, bid },
    setActionType,
  }) => {
    return (
      <div className="buy-xln-container">
        <div className="buy-xln-tokens">
          <div className="buy-tokens-content">
            <h2>{header}</h2>
            <p>{balanceText} 0 XLN tokens.</p>
            <p>
              {description}
            </p>
            {showForm ? (
              <div>
                <FormatLayout type={form.type} options={form} />
                {!showForm && (
                  <PrimaryB text={"Update"} className={submit.className} />
                )}
              </div>
            ) : (
              <div className="mint-asset-text" onClick={(e) => setShowForm()}>
                <h2>
                  Buy {supply.toLocaleString("en-US")} XLN{" "}
                  <i className="fas fa-edit"></i>
                </h2>
                <i>
                  You are about to buy {supply.toFixed(2).toLocaleString("en-US")}{" "}
                  Medallion XLN tokens for{" "}
                  {(price * supply).toFixed(2).toLocaleString("en-US")} DAI{" "}
                </i>
              </div>
            )}
          </div>
          {!showForm && (
            <div className="mint-asset-form">
              <PrimaryB
                text={submit.label}
                className={submit.className}
                click={() => setActionType(action)}
              />
            </div>
          )}
        </div>
        <div className="mint-asset-image">
          <img
            src={images.cityAds.url}
            width={images.cityAds.width}
            height={images.cityAds.height}
          />
        </div>
      </div>
    );
  };