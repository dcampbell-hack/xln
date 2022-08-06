import { useState } from "react";
import Avatar from "../../../avatar";
import AssetImageItem from "../../../assets/index";
import { PrimaryB, InfoB } from "../../../buttons/buttons";
import TruncateText from "../../../text/truncate";
import FormatLayout from "../..";

export const WalletSignIn = ({
  options: { images, submit },
  setValues,
  values,
  setActionType
}) => {
  // const [ showPassword, setShowPassword ] = useState(false)

  // const onchange = e => {
  //    setValues({ ...values, [e.target.name]: e.target.value });
  // }

  return (
    <div className="wallet-sign-in">
      <div className="wallet-xln-logo">
        <img
          src={images.assetSecurity.url}
          width={images.assetSecurity.width}
          height={images.assetSecurity.height}
        />
      </div>
    </div>
  );
};

export const BuyAsset = ({
  options: { images, action, submit, description, price, form, bid },
  setActionType
}) => {
  const [showForm, setShowForm] = useState(false);

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
             {  !showForm && <PrimaryB text={"Update"} className={submit.className} /> }
              </div>
            </div>
          ) : (
            <div className="text" onClick={(e) => setShowForm(true)}>
              <h1> {price} ETH</h1>
            </div>
          )}
        </div>
      </div>
      { !showForm &&
      <div className="mint-asset-form">
        <PrimaryB text={submit.label} className={submit.className} click={() => setActionType(action) } payload={{ price }} />
      </div>
}
    </div>
  );
};

export const MintAsset = ({
  options: { images, submit, description, price },
  setActionType
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
        <PrimaryB text={submit.label} className={submit.className} click={() => setActionType(action) } payload={null} />
      </div>
    </div>
  );
};

export const CreateAsset = ({ options: { form, submit }, setActionType }) => {
  return (
    <div className="create-asset-container">
      <div className="create-asset">
        <FormatLayout type={form.type} options={form} setActionType={setActionType} />
      </div>
    </div>
  );
};

export const ShowAsset = ({
  options: { images, title, description, price, dependencies, submit },
  setActionType
}) => {
  const listAvatars = () =>
    dependencies.map(({ username, avatar, width, height }) => (
      <Avatar
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
          src={images.asset.url}
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
        <h1>{title}</h1>
        <TruncateText text={description} charLimit={200} />
        <div className="show-asset-price">
          <h1>{price} XLN </h1>
        </div>
        <div className="show-asset-buttons">
          <PrimaryB text={"Buy"} />
          <InfoB text={"Sell"} />
        </div>
      </div>
    </div>
  );
};

export const ShowAssets = ({
  options: { type, assets, searchBar, setCheckbox, checkbox },
  setActionType
}) => {
  const [search, setSearch] = useState("");

  const mapAssets = () =>
    assets
      .filter(({ asset_name }) => asset_name.includes(asset_name))
      .map(({ id, username, avatar: { url, width, height }, cover }) => (
        <AssetImageItem
          key={id}
          username={username}
          avatar={url}
          cover={cover}
          width={width}
          height={height}
        />
      ));

  return (
    <div className="show-assets-container">
      <div className="asset-search">
        <input
          type="text"
          placeholder={`${searchBar.placeholder}`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="show-assets-list">{mapAssets()}</div>
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

export const BuyShare = ({ options: {} }) => {
  return (
    <div className="buy-share-container">
      <h2>Buy Share</h2>
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

export const CodeBlock = ({ options: {}, setActionType }) => {
  return (
    <div>
      <h2>Code Block</h2>
    </div>
  );
};

export const AddPermissions = ({ options: {}, setActionType }) => {
  return (
    <div>
      <h2>Add Permissions</h2>
    </div>
  );
};

export const TestFuncsTemplate = ({ options: { buttons },  setActionType }) => {

  console.log('Action ---', buttons)
  const mapButtons = () => buttons.map(({ label, details, className, icon, action}) =>  <div className="test-func-group">
  <div className="test-func-panel">
    <h1>{details.title}</h1>
    <h4>{details.description}</h4>
    <PrimaryB text={label} click={() => setActionType(action)} />
  </div>
</div>
)
  return (
    <div className="test-template-funcs">

      { mapButtons() }

    </div>
  );
};

export const FileUpload = ({ className, id, name }) => (
  <input className={className} type="file" id={id} name={name} />
);
