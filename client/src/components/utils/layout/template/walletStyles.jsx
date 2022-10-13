import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { convertXLNToUSD } from "../../operations/calculations";
import Avatar from "../../avatar";
import { PrimaryB, InfoB, WarningB, DangerB } from "../../buttons/buttons";
import {
  DangerL,
  LinkL,
  PrimaryL,
  InfoL,
  VerticalButtonL,
} from "../../buttons/links";
import FormatLayout from "../index.jsx";

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

  return (
    <div className="wallet-sign-in">
      <div className="wallet-xln-logo" onClick={func}>
        <img
          src={images.assetSecurity.url}
          width={images.assetSecurity.width}
          height={images.assetSecurity.height}
        />
      </div>
      <div>
        <i>{text}</i>
      </div>
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
    setSelectedAsset(index)
    action("mintNFT")
  }

  const mapAssets = () =>
    assets.map(({ id, cover, stock, flow, price, fee }, index) => (
      <div key={index} className="user-asset">
        <img
          src={cover == "no-photo.jpg" ? images.noPhoto.url : `/uploads/${userId}/asset/${cover}`}
          width="100%"
          height="auto"
        />
        <div className="asset-stats">
        <div className="wallet-tab">Flow: {flow}</div>
        <div className="wallet-tab">Stock: {stock}</div>
        <div className="wallet-tab">Fee: {fee.toFixed(1)}</div>
        <div className="wallet-tab">Price: {price}</div>
        </div>
        <div className="wallet-asset-update">
        {cover == "no-photo.jpg" ?
          <InfoL
            text="Attach Image"
            url={`/xln/attach-asset/${id}`}
            icon={""}
            external={false}
            show={true}
          /> :
          <InfoB
          text="Mint NFT"
          click={() => runAction(index)}
          icon={""}
          external={false}
          show={true}
        />
    }
        </div>
      </div>
    ));

  return <div className="wallet-asset-container">{mapAssets()}</div>;
};

const Shares = () => {
  return <div>Shares</div>;
};

const Shareholders = () => {
  return <div>Shareholders</div>;
};

const CompleteProfile = ({ form, images, setActionType }) => {
  return (
    <div className="wallet-content">
      <div className="adjust-setting">
        <img
          src={images.noProfile.url}
          width={images.noProfile.width}
          height={images.noProfile.height}
        />
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
  content: { navLinks, images, walletPanel, newProfile },
  options: { form, staticText },
  setActionType,
}) => {
  /* <div className="web-link">
<i className="fa-solid fa-link"></i>
<i>web.app</i>
</div>
`1
<div className="web-link">
<i className="fa-brands fa-facebook"></i>
<i>facebook/</i>
</div>

<div className="web-link">
<i className="fa-brands fa-twitter"></i>
<i>twitter/</i>
</div>

<div className="web-link">
<i class="fa-brands fa-instagram"></i>
<i>instagram/</i>
</div> */

  return (
    <div
      className="wallet-container"
      style={{
        backgroundImage: `url(/uploads/${users.id}/cover/${users.cover})`,
        backgroundSize: "cover",
      }}
    >
      <div className="wallet-nav">{users.media && walletLinks(navLinks)}</div>

      <div className="wallet-profile">
        <div className="wallet-content">
          <div className="wallet-panel">
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
                  assets={assets?.userAssets}
                  images={images}
                  setSelectedAsset={setSelectedAsset}
                  action={setActionType}
                />
              ),
              walletShares: <Shares />,
              walletShareholders: <Shareholders />,
              walletSetting: <Setting form={form} users={users} setActionType={setActionType} />,
              walletFileUpload: (
                <CompleteProfile
                  form={form}
                  images={images}
                  setActionType={setActionType}
                />
              ),
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
          <div className="wallet-footer-buttons"></div>
        </div>
      </div>
    </div>
  );
};
