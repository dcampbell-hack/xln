import {
  PrimaryB,
  InfoB,
  WarningB,
  DangerB,
} from "../../../../utils/buttons/buttons";
import TruncateText from "../../../../utils/text/truncate";

export const MintAsset = ({
    options: { images, submit, description, price },
    setActionType,
  }) => {
    return (
      <div className="mint-asset-container">
        <div className="mint-asset-image">
          <img
            src={images.assetSecurity.url}
            width={images.assetSecurity.width}
            height={images.assetSecurity.height}
          />
        </div>
        <div className="mint-asset-description">
          <TruncateText text={description} charLimit={200} />
        </div>
        <div className="mint-asset-price">
          <h1>{price} XLN</h1>
        </div>
        <div className="mint-asset-form">
          <PrimaryB
            text={submit.label}
            className={submit.className}
            click={() => setActionType(action)}
            payload={null}
          />
        </div>
      </div>
    );
  };