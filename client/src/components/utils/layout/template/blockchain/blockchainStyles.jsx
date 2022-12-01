import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Avatar from "../../../avatar";
import AssetImageItem from "../../../assets/index";
import { PrimaryB, InfoB, WarningB, DangerB } from "../../../buttons/buttons";
import { LinkL, PrimaryL, InfoL } from "../../../buttons/links";
import { BuyFormInput } from "../form/formStyles";
import TruncateText from "../../../text/truncate";
import FormatLayout from "../../index";

export const AddPermissions = ({ options: {}, setActionType }) => {
    return (
      <div>
        <h2>Add Permissions</h2>
      </div>
    );
  };


export const LoadNFTs = (nft) => {
    return(
        <div className="flex justify-center">
        {/* <h4>Figure out how to layout later</h4> */}
        <div className="px-4"></div>
        <div className="grid grid-cols-1">
          {nfts.map((nft, i) => {
            <div key={i} className="border shadow rounded">
              <img src={nft.image} />
              <div className="p-4">
                <p style={{ height: "64px" }}>
                  {nft.name} {nft.price} ETH
                </p>
                <button onClick={() => buyNFT()}>Buy NFT</button>
              </div>
              <div className="p-5">{nft.description}</div>
            </div>;
          })}
        </div>
      </div>
    )
}

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
  
  export const BuyTokens = ({
    setShowForm,
    blockchain: { price, supply, showForm },
    options: { images, action, submit, description, form, bid },
    setActionType,
  }) => {


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
            <h2>Buy Medallion XLN Tokens</h2>
            <p>You currently have a balance of 0 XLN tokens.</p> 
            <p>Owning Medallion XLN tokens allows users to interact within the greater Medalllion XLN ecosystem. Users can tokenize assets, receive token rewards, and leverage greater network effects.</p>
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
                 Buy { supply.toLocaleString("en-US") } XLN <i className="fas fa-edit"></i>
                </h2>
                <i>You are about to buy { supply.toFixed(2).toLocaleString("en-US") } Medallion XLN tokens for { (price * supply).toFixed(2).toLocaleString("en-US") } DAI </i>
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
      </div>
    );
  };


export const CreateAsset = ({ options: { form }, setActionType }) => {
  return (
    <div className="create-asset-container">
      <div className="create-asset">
        <FormatLayout
          type={form.type}
          options={form}
          setActionType={setActionType}
        />
      </div>
    </div>
  );
};

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
  
  
  
  export const SellShare = ({ options: {}, setActionType }) => {
    return (
      <div>
        <h2>Sell Share</h2>
      </div>
    );
  };


  export const TxPrompt = ({ options: {}, setActionType }) => {
    return (
      <div>
        <h2>Tx Prompt</h2>
      </div>
    );
  };