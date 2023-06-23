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



export const NetflixSlideShow = ({ users, images, staticText, blockchain }) => {
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