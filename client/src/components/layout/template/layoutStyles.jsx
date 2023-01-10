import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Avatar from "../../utils/avatar";
import { AssetItem } from "../../utils/asset/assetItem";
import { PrimaryB, InfoB, WarningB, DangerB } from "../../utils/buttons/buttons";
import { DangerL, LinkL, PrimaryL, InfoL } from "../../utils/buttons/links";
import TruncateText from "../../utils/text/truncate";
import FormatLayout from "../index.jsx";
import AllCameras from "../../utils/webcam/AllCameras";
import { timeSince } from "../../utils/operations/calculations";


export const AvatarProfile = ({ options: {}, setActionType }) => {
  return (
    <div>
      <h2>Avatar Profile</h2>
    </div>
  );
};

export const CodeBlock = ({ options: {}, setActionType }) => {
  return (
    <div>
      <h2>Code Block</h2>
    </div>
  );
};


export const FileUpload = ({ className, id, name }) => (
  <input className={className} type="file" id={id} name={name} />
);


export const Webcam = () => {
  return(
    <div className="webcam-container">

    </div>
  )
}


export const ShowAsset = ({
  blockchain,
  assets: { asset },
  options: { images, title, action, description, price, dependencies, submit },
  setActionType,
}) => {

  const listAvatars = () =>
    dependencies.map(({ username, avatar, width, height }, index) => (
      <Avatar
        key={index}
        username={username}
        avatar={avatar}
        width={width}
        height={height}
      />
    ));


  return (
    <div className="show-asset-container"> 
      <div className="show-asset-media">
        <img
          src={`/uploads/${asset.user}/asset/${asset.cover}`}
          width={images.asset.width}
          height={images.asset.height}
        />
        <div className="show-info show-asset-dependencies">
          {listAvatars()} ... <p>{dependencies.length}</p>
        </div>
        <div className="show-info show-asset-permission">
          <div>
            <i className="fas fa-lock"></i> Check Permissions
          </div>
        </div>
      </div>
      <div className="show-asset-description">
        <div className="show-asset-header">
          <h1>{ asset.name }</h1>
          <i>created { timeSince( new Date(asset.createdAt))} ago</i>
        </div>
        <TruncateText text={ asset?.description} charLimit={200} />
        <div className="show-asset-price-container">
          <div className="show-asset-price">
          <div className="shareholder-container">
              <img src={images.logo.url} width={images.logo.width} height={images.logo.height}  />
            </div>
            <h1>{ asset.price} XLN </h1>
            <div className="">
            <div className="shareholder-container">
              { asset.flow } <i className="fas fa-user"></i>
            </div>
            <div className="shareholder-container">
              { [].length } <i className="fas fa-comment"></i>
            </div>
            <div className="shareholder-container">
              { [].length } <i className="far fa-sticky-note"></i>
            </div>
            </div>
          </div>
          <div className="show-asset-buttons">
            {
              asset.pending ?
              <div className="interactive-asset">
                 <PrimaryB text={"Mint NFT"} click={() => setActionType('mintNFT')} />
                  
              </div>
              :
            <div className="interactive-asset">  
                <PrimaryB text={"Buy"} click={() => setActionType(action)} />
                <InfoB text={"Sell"} />
            </div>
}
          </div>
          <div className="show-asset-info">
             { blockchain.isError ? <p> An error occured: {  blockchain.error?.err?.message.split('(')[0] } </p> :  <p> Mint new asset</p>  }
        </div>
        </div>
      </div>
    </div>
  );
};

export const ShowAssets = ({
  collection,
  options: { type, mode, assets, searchBar, images, setCheckbox, checkbox },
  setActionType,
}) => {
  let navigate = useNavigate();
  const [search, setSearch] = useState("");

  const array = mode == "mint" ? assets : collection.nft.collection

  const mapAssets = () =>
   array
      .filter(({ asset_name }) => asset_name.includes(asset_name))
      .map(({ id, username, avatar: { url, width, height }, cover }, index) => (
        <AssetItem
          key={index}
          username={username}
          avatar={url}
          cover={cover}
          width={width}
          height={height}
        />
      ));

  return (
    <div className="show-assets-container">
      <div className="assets-btn">
        <div className="assets-spread">
        <PrimaryL
            text={"Mintable"}
            url={"/xln/assets/mintable"}
            icon={"fas fa-images"}
            show={true}
            external={false}
        /> 
        <DangerL
        text={"Buy"}
        url={"/xln/assets/buy"}
        icon={"fas fa-images"}
        show={true}
        external={false}
        />
        </div>
      </div>
      <div className="asset-search">
        <input
          type="text"
          placeholder={`${searchBar.placeholder}`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="show-assets-list">
        { array.length ? mapAssets() : <div className="asset-error">No Assets available</div> }
        <div
          className="create-new-asset-btn"
          onClick={() => navigate(`/xln/create-asset`, { replace: true })}
        >
          <i className="fas fa-plus"></i>
        </div>
      </div>
    </div>
  );
};

export const ShowComments = ({ options: {}, setActionType }) => {
  return (
    <div>
      <h2>ShowComments</h2>
      <p>
        Do save comments as a tree then depth first search through the comments
      </p>
    </div>
  );
};

export const ShowReviews = ({ options: {}, setActionType }) => {
  return <div>Show Reviews</div>;
};


export const TestFuncsTemplate = ({ options: { buttons }, setActionType }) => {
  console.log("Action ---", buttons);
  const mapButtons = () =>
    buttons.map(({ label, details, className, icon, action }) => (
      <div className="test-func-group">
        <div className="test-func-panel">
          <h1>{details.title}</h1>
          <h4>{details.description}</h4>
          <PrimaryB text={label} click={() => setActionType(action)} />
        </div>
      </div>
    ));
  return <div className="test-template-funcs">{mapButtons()}</div>;
};

