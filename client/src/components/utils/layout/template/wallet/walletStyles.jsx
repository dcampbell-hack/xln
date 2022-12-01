import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { convertXLNToUSD } from "../../../operations/calculations";
import Avatar from "../../../avatar";
import { PrimaryB, InfoB, WarningB, DangerB, LinkB } from "../../../buttons/buttons";
import {
  DangerL,
  LinkL,
  PrimaryL,
  InfoL,
  VerticalButtonL,
} from "../../../buttons/links";
import { FormInput, FormDropdown, FormButton } from "../form/formStyles";
import FormatLayout from "../../index.jsx";
import AllCameras from "../../webcam/AllCameras";
import Chart from "../../../charts";
import { generateArt, opencv } from "../../../../../actions/xln-api";


const walletLinks = (navLinks) =>
  navLinks?.map(({ text, to, className, icon, show, external }, index) => (
    <VerticalButtonL
      key={index}
      text={text}
      url={to}
      className={className}
      icon={icon}
      show={show}
      external={external}
    />
  ));

export const WalletSignIn = ({
  options: { images, navLinks, text, staticText },
  setValues,
  values,
  setActionType,
}) => {
  const func = () => console.log("Connect Wallet()");
  console.log()

  return (
    <div className="wallet-sign-in">
      {/* <div className="wallet-xln-logo" onClick={func}>
        <img
          src={images.assetSecurity.url}
          width={images.assetSecurity.width}
          height={images.assetSecurity.height}
        />
      </div>
      <div>
        <i>{text}</i>
      </div>  */}

      <PrimaryB text="GET Python" icon="" click={() => console.log("Get opencv")} />
      <InfoB text="GENERATE ART" icon="" click={() => generateArt} />
      <DangerB text="OPEN CV" icon="" click={() => opencv} />

    </div>
  );
};

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

export const Setting = ({ users, form, setActionType }) => {
  useEffect(() => {
    form?.formData.fields?.forEach((field) => {
      if (field.attributes.input.name == "firstname") {
        field.attributes.input.placeholder = users.firstname;
      }

      if (field.attributes.input.name == "lastname") {
        field.attributes.input.placeholder = users.lastname;
      }

      if (field.attributes.input.name == "username") {
        field.attributes.input.placeholder = users.username;
      }
    });
  }, [users]);

  return (
    <div className="wallet-content-setting">
      <div className="wallet-setting-selections">
      <div className="select-wallet-settings selected">
        <Link to="/xln/wallet/setting">Edit Profile</Link>
      </div>  
      <div className="select-wallet-settings selected">
      <Link to="/xln/wallet/setting/permission">Edit Permissions</Link>
      </div>  
      <div className="select-wallet-settings selected">
      <Link to="/xln/wallet/setting/credentials">Asset Credentials</Link>
      </div>  
      <div className="select-wallet-settings selected">
      <Link to="/xln/wallet/setting/photos">Upload / Change Photo</Link>
      </div>  
      </div>
      <FormatLayout
        type={form.type}
        options={form}
        setActionType={setActionType}
      />
    </div>
  );
};

const Assets = ({ userId, assets = [], images, action, setSelectedAsset }) => {
  const runAction = (index) => {
    setSelectedAsset(index);
    action("mintNFT");
  };

  console.log("Asset", assets);

  // "aiArt",
  // "blog",
  // "document",
  // "domain",
  // "enterprise",
  // "image",
  // "link",
  // "live",
  // "metaverse",
  // "music",
  // "realEstate",
  // "shop",
  // "text",
  // "video",
  // "website"

  // 'AIArt',
  // 'Blog',
  // 'Document'
  // 'Domain',
  // 'Enterorise',
  // 'Link',
  // 'Live',
  // 'Text',
  // 'Image',
  // 'Metaverse',
  // 'Music',
  // 'Real Estate',
  // 'Video',
  // 'File',
  // "Website"

  const selectAssetRoute = (type) => {
    if (type == "AI Art") return "ai-art";
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
          <img
            src={
              cover == "no-photo.jpg"
                ? images.noPhoto.url
                : `/uploads/${userId}/asset/${cover}`
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

const Stats = () => {
  return <div className="stats-container">
    <div className="stats-chart-container">
      <div className="stats-chart-price">
        <h1>$100,000,000</h1>
        <p>+$43.29(+0.04) Today</p>
      </div>
      <div className="stats-chart">
        <Chart type="line" chartData={{ label: "Label", distribution: [] }} />
      </div>
    </div>
    <div  className="stats-list-panel">
      <div className="stats-header"></div>
      <div className="stats-list-tokens"></div>
    </div>
  </div>;
};

const Shares = () => {
  return <div>Shares</div>;
};

const Shareholders = () => {
  return <div>Shareholders</div>;
};

const Seed = () => {
  return (
    <div className="wallet-seed-container">
      <div>
        <h2>Confirm your seed phrase</h2>
        <p>Please select each word it was presented to you</p>
      </div>
      <div className="wallet-seed-list">
        <div className="seed">Tall</div>
        <div className="seed">Police</div>
        <div className="seed">Kill</div>
        <div className="seed">Again</div>
        <div className="seed">End</div>
        <div className="seed">Alpha</div>
        <div className="seed">Brew</div>
        <div className="seed">Beta</div>
        <div className="seed">Divine</div>
        <div className="seed">Today</div>
        <div className="seed">Banger</div>
        <div className="seed">Brew</div>
      </div>
      <PrimaryB
        text="Confirm Seed Phrase"
        className=""
        icon=""
        click={() => console.log("Confirm Seed Phrase")}
      />
    </div>
  );
};

const Swap = () => {

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

const Ninja = () => {
  return <div>Ninja</div>;
};

const Send = () => {
  return <div>Send</div>;
};

const Receive = () => {
  return <div>Receive</div>;
};

const CompleteProfile = ({ users, form, images, setActionType }) => {
  return (
    <div className="wallet-content">
      <div
        className={
          users.media ? "permission-label-container" : "adjust-setting"
        }
      >
        <div className="permission-label">
          <img
            src={
              users.media
                ? `/uploads/${users.id}/avatar/${users.avatar}`
                : images.noProfile.url
            }
            width={images.noProfile.width}
            height={images.noProfile.height}
          />
        </div>
      </div>

      <FormatLayout
        type={form.type}
        options={form}
        setActionType={setActionType}
      />
    </div>
  );
};

export const Wallet = ({
  type,
  assets,
  users,
  blockchain,
  shares,
  setSelectedAsset,
  content: { navLinks, images, walletPanel, walletFooter, newProfile },
  options: { form, staticText },
  setActionType,
}) => {


  const [ moreNav, setMoreNav ] = useState(false)

  console.log('Assets', assets)

  return (
    <div
      className="wallet-container"
      style={{
        backgroundImage: `url(/uploads/${users.id}/cover/${users.cover})`,
        backgroundSize: "cover",
      }}
    >
      <div className="wallet-edge">
        <div className="wallet-panel">
          <div className="wallet-tab">
            <LinkB text="" icon={ moreNav ?  "fas fa-minus" : "fas fa-plus" } click={() => setMoreNav(!moreNav)} />
          </div>
          {users.media &&
            walletPanel.map(({ text, url, icon, show, external }, index) => (
              <div className="wallet-tab">
                <LinkL
                  key={index}
                  text={text}
                  url={url}
                  icon={icon}
                  show={show}
                  external={external}
                />
              </div>
            ))}
        </div>
        { moreNav &&
        <div className="wallet-nav">
           { assets.assetTypes.types.map(({ name, url, icon, show, external }, index) => <LinkL key={index} text={name} url={url} icon={icon} show={show} external={external} />)}
        </div>
        }
      </div>

      <div className="wallet-profile">
        <div className="wallet-content">
          {
            {
              wallet: (
                <Main
                  users={users}
                  images={images}
                  staticText={staticText}
                  blockchain={blockchain}
                />
              ),
              walletAssets: (
                <Assets
                  userId={users.id}
                  assets={assets?.assets}
                  images={images}
                  setSelectedAsset={setSelectedAsset}
                  action={setActionType}
                />
              ),
              walletShares: <Shares />,
              walletShareholders: <Shareholders />,
              walletSetting: (
                <Setting
                  form={form}
                  navLinks={navLinks}
                  users={users}
                  setActionType={setActionType}
                />
              ),
              walletPermission: (
                <Setting
                  form={form}
                  navLinks={navLinks}
                  users={users}
                  setActionType={setActionType}
                />
              ),
              walletCredential: (
                <Setting
                  form={form}
                  navLinks={navLinks}
                  users={users}
                  setActionType={setActionType}
                />
              ),
              walletFileUpload: (
                <Setting
                form={form}
                navLinks={navLinks}
                users={users}
                setActionType={setActionType}
              />
                // <CompleteProfile
                //   users={users}
                //   form={form}
                //   images={images}
                //   setActionType={setActionType}
               // />
              ),
              walletStats: <Stats />,
              walletSeed: <Seed />,
              walletSwap: <Swap />,
              walletNinja: <Ninja />,
              walletSend: <Send />,
              walletReceive: <Receive />,
            }[type]
          }
        </div>
        <div className="wallet-footer">
          <div className="wallet-footer-name">
            <h2>
              {users.firstname} {users.lastname}
            </h2>
            <i>@{users.username}</i>
          </div>
          <div className="wallet-footer-buttons">
            {walletFooter.map(
              ({ text, className, url, icon, show, external }, index) => (
                <LinkL
                  key={index}
                  text={text}
                  className={className}
                  url={url}
                  icon={icon}
                  show={show}
                  external={external}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
