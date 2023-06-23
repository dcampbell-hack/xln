import { Link, useNavigate } from "react-router-dom";
import { convertXLNToUSD } from "../../utils/operations/calculations";
import Avatar from "../../utils/avatar";
import {
  DangerL,
  LinkL,
  PrimaryL,
  InfoL,
  VerticalButtonL,
} from "../../utils/buttons/links";


export const Main = ({ users, images, staticText, blockchain }) => {
    const mapSocialLinks = () =>
      users.socialLinks.map(({ platform, url }, index) => (
        <div key={index} className="web-link">
          <a href={url} target="_target">
            <i className="fa-solid fa-link"></i>
            <i>{platform}</i>
          </a>
        </div>
      ));
  
    return (
      <div className="wallet-main">
        <div className="wallet-user-properties">
          {users.media ? (
            <Avatar
              username={users.id}
              avatar={users.avatar}
              width={"250px"}
              height={"250px"}
            />
          ) : (
            <div className="no-profile-avatar">
              <Link to="/xln/wallet/file-upload">
                <img
                  src={images.noProfile.url}
                  width={images.noProfile.width}
                  height={images.noProfile.height}
                />
              </Link>
            </div>
          )}
          <div className="account-network">
            <div>
              <b>
                {users?.followers.length} {staticText.followersText}
              </b>
            </div>
  
            <div>
              <b>
                {users?.following.length} {staticText.followingText}
              </b>
            </div>
          </div>
          <div className="web-links">{mapSocialLinks()}</div>
        </div>
  
        <div className="wallet-user-properties">
          <div className="wallet-token-details">
            <div className="wallet-token-icon">
              <img
                src={images.logo.url}
                width={images.logo.width}
                height={images.logo.height}
              />
            </div>
            <h1>
              {blockchain.balance} {staticText.tokenSymbol}
            </h1>
            <h3>
              $
              {convertXLNToUSD({
                balance: blockchain.balance,
                tokenPrice: blockchain.price,
              })}{" "}
              {staticText.usdSymbol}
            </h3>
            <LinkL
              text={staticText.btnLinkText}
              url={staticText.btnLinkUrl}
              icon={""}
              show={true}
              external={false}
            />
          </div>
        </div>
  
        <div className="wallet-user-properties">
          <div className="wallet-token-details">
            <p>{staticText.assetsOwned}</p>
            <h1>{users.assetsOwned}</h1>
            <p>{staticText.shareholdersText}</p>
            <h1>0</h1>
            <p>{staticText.valueText}</p>
            <h1>0</h1>
          </div>
        </div>
      </div>
    );
  };
  
  const Assets = ({ userId, assets = [], images, action, setSelectedAsset }) => {
    const runAction = (index) => {
      setSelectedAsset(index);
      action("mintNFT");
    };
  
    const selectAssetRoute = (type) => {
      if (type == "AI") return "ai/art";
      if (type == "Blog") return "blog";
      if (type == "Document") return "document";
      if (type == "Domain") return "domain";
      if (type == "Enterprise") return "enterprise";
      if (type == "Image") return "image";
      if (type == "Link") return "link";
      if (type == "Live") return "live";
      if (type == "Metaverse") return "metaverse";
      if (type == "Music") return "music";
      if (type == "Podcast") return "podcast";
      if (type == "Real Estate") return "real-estate";
      if (type == "Shop") return "shop";    
      if (type == "Text") return "text";
      if (type == "Video") return "video";
      if (type == "Website") return "website";
    };
  
    const mapAssets = () =>
      assets
        .filter(({ user }) => user == userId)
        .map(({ id, assetType, cover, stock, flow, price, fee }, index) => (
          <div key={index} className="user-asset">
            {          console.log(assetType) }
            <img
              src={
                cover == "no-photo.jpg"
                  ? images.noPhoto.url
                  : ( assetType == "AI" ? cover : `/uploads/${userId}/asset/${cover}`)
              }
              width="100%"
              height="auto"
            />
            <div className="asset-stats">
              <div className="wallet-tab">Flow: {flow}</div>
              <div className="wallet-tab">Stock: {stock}</div>
              <div className="wallet-tab">Fee: {fee.toFixed(2)}</div>
              <div className="wallet-tab">Price: {price}</div>
            </div>
            <div className="wallet-asset-update">
              {cover == "no-photo.jpg" ? (
                <InfoL
                  text={`Edit ${assetType[0]}`}
                  url={`/xln/assets/${id}/${selectAssetRoute(assetType[0])}/`}
                  icon={""}
                  external={false}
                  show={true}
                />
              ) : (
                <InfoL
                  text="Mint NFT"
                  url={`/xln/assets/${id}`}
                  // click={() => runAction(index)}
                  icon={""}
                  external={false}
                  show={true}
                />
              )}
            </div>
          </div>
        ));
  
    return <div className="wallet-asset-container">{mapAssets()}</div>;
  };
  