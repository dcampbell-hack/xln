import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { convertXLNToUSD } from "../../../operations/smartContracts/calculations";
import Avatar from "../../../avatar";
import { PrimaryB, InfoB, WarningB, DangerB } from "../../../buttons/buttons";
import { DangerL, LinkL, PrimaryL, InfoL } from "../../../buttons/links";
import FormatLayout from "../..";

const walletLinks = (navLinks) =>
  navLinks.map(({ text, to, icon, show, external }) => (
    <LinkL text={text} url={to} icon={icon} show={show} external={external} />
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

export const Wallet = ({
  assets,
  users,
  blockchain,
  shares,
  options: { navLinks, images, staticText },
  setActionType,
}) => {


  const mapSocialLinks = () =>
    users.socialLinks.map(({ platform, url }) => (
      <div className="web-link">
        <a href={url} target="_target">
          <i className="fa-solid fa-link"></i>
          <i>{platform}</i>
        </a>
      </div>
    ));

  {
    /* <div className="web-link">
<i className="fa-solid fa-link"></i>
<i>web.app</i>
</div>

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
  }

  return (
    users.updated ?
    <div
      className="wallet-container"
      style={{
        backgroundImage: `url(/uploads/${users.id}/cover/${users.cover})`,
        backgroundSize: "cover",
      }}
    >
      <div className="wallet-profile">
        <div className="wallet-header">{walletLinks(navLinks)}</div>
        <div className="wallet-content">
          <div className="wallet-panel">
            <div className="wallet-tab">
            <LinkL
                text={""}
                url={"/xln/upload-user-file"}
                icon={"fas fa-images"}
                show={false}
                external={false}
              />
            </div>
          </div>
          <div className="wallet-avatar">
            <Avatar
              username={users.id}
              avatar={users.avatar}
              width={"250px"}
              height={"250px"}
            />

            <div className="account-network">
              <div>
                <b>{ users?.followers.length} { staticText.followersText}</b>
              </div>

              <div>
                <b>{ users?.following.length}  { staticText.followingText }</b>
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
              <h1>{blockchain.balance} { staticText.tokenSymbol }</h1>
              <h3>
                $
                {convertXLNToUSD({
                  balance: blockchain.balance,
                  tokenPrice: blockchain.price,
                })}{" "}
                { staticText.usdSymbol}
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
              <p>{ staticText.assetsOwned }</p>
              <h1>{users.assetsOwned}</h1>
              <p>{ staticText.shareholdersText }</p>
              <h1>0</h1>
              <p>{ staticText.valueText }</p>
              <h1>0</h1>
            </div>
          </div>
        </div>
        <div className="wallet-footer">
          <div className="wallet-footer-name">
            <h2>
              {users.firstname} {users.lastname}
            </h2>
            <i>@{users.username}</i>
          </div>
          <div className="wallet-footer-buttons">
          </div>
        </div>
      </div>
    </div>
    :
    <div className="wallet-container">
       <div className="wallet-profile">
        <div className="wallet-content-setting">
          <div>
            <p>Add Profile Picture</p>
           <DangerL 
                   text="Update Profile Images"
                   url="/xln/upload-user-file"
                   icon={""}
                   show={true}
                   external={false}
           />
           <p>Add Social Links</p>
           <DangerL 
                   text="Update Profile Settings"
                   url="/xln/setting"
                   icon={""}
                   show={true}
                   external={false}
           />
           </div>
           </div>
       </div>
    </div>
  );
};

export const WalletSetting = ({
  users,
  blockchain,
  options: { navLinks, images, form, submit },
  setActionType,
}) => {
  useEffect(() => {
    form.formData.fields.forEach((field) => {
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
    <div
      className="wallet-container"
      style={{
        backgroundImage: `url(/uploads/${users.id}/cover/${users.cover})`,
        backgroundSize: "cover",
      }}
    >
      <div className="wallet-profile">
        <div className="wallet-header">{walletLinks(navLinks)}</div>
        <div className="wallet-content-setting">
          <FormatLayout
            type={form.type}
            options={form}
            setActionType={setActionType}
          />
        </div>
        <div className="wallet-footer">
          <div className="wallet-footer-name">
            <i>{users.updated ? <p>Profile Updated</p> : <p>Not Updated</p>}</i>
          </div>
          <div className="wallet-footer-buttons">
           
          </div>
        </div>
      </div>
    </div>
  );
};
