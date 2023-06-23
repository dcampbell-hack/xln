import { useState, useEffect } from "react";
import {
  DangerL,
  LinkL,
  PrimaryL,
  InfoL,
  VerticalButtonL,
} from "../../utils/buttons/links";
import AllCameras from "../../utils/webcam/AllCameras";
import { Main } from "./main";
import { Shares } from "./shares";
import { Shareholders } from "./shareholders";
import { Seed } from "./seed";
import { Swap } from "./swap";
import { Ninja } from "./ninja";
import { Send } from "./send";
import { Receive } from "./recieve";

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


  return (
    <div
      className="wallet-container"
      style={{
        backgroundImage: `url(/uploads/${users.id}/cover/${users.cover})`,
        backgroundSize: "cover",
      }}
    >

      { moreNav &&
        <div className="wallet-nav">
           { assets.assetTypes.types.map(({ name, url, icon, show, external }, index) => <LinkL key={index} text={name} url={url} icon={icon} show={show} external={external} />)}
        </div>
        }

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
              walletShares: <Shares />,
              walletShareholders: <Shareholders />,
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
