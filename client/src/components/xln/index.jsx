import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
// import axios from "axios";
// import { ethers } from "ethers";
// import Web3Modal from "web3modal";
// import Web3 from "web3";


//UI
import TemplateLayout from "../utils/layout/template/layout";

// CSS
import "../../css/xln/XLN.scss";
import "../../css/assets/Avatar.scss";
import "../../css/templates/wallet.scss";

import {
  getAddress,
  loadNFTs,
  loggedInUserAddress,
  getContractAddress,
  updateWalletBalance
} from "../../actions/blockchain";

import {
  getUserShares
} from "../../actions/share";

const XLN = ({
  assets,
  auth,
  blockchain,
  loadNFTs,
  getContractAddress,
  getAddress,
  getUserShares,
  loggedInUserAddress,
  page,
  shares,
  users,
  xln: {
    options: { content, templateData },
  },
}) => {
  const [web3Api, setWeb3Api] = useState("");
  const [contentText, setContentText] = useState(content.defaultText);
  const [accounts, setAccounts] = useState({
    address: "",
    url: "",
  });

  let navigate = useNavigate();

  useEffect(() => {
    if(blockchain.nft.address){
       loadNFTs(blockchain);
    }


if(!blockchain.address){
    if(users.sharesOwned > 0){
        getUserShares(users.id);
    }
}

  }, [ blockchain.nft.address ]);

  useEffect(() => {
    const getAllAddresses = async () => {
      await getContractAddress();
    };

    if (!blockchain.token.address) {
      getAllAddresses();
    }

    if(users.accountCreated){
      if (users.isAuthenticated == false) {
          setAccounts({ ...accounts, url: '/login'})
     }
  }

  }, [ ]);

  useEffect(() => {
    navigate(`${accounts.url}`, { replace: true });
  }, [accounts.url]);

  useEffect(() => {
    const loadProvider = async () => {
      let provider = null;

      if( !blockchain.address ){
        setAccounts({ ...accounts, url: '/xln/'})
      }

      if (window.ethereum) {
        provider = window.ethereum;
        try {
          const eth = await provider.request({ method: "eth_requestAccounts" });
          if(!blockchain.address) loggedInUserAddress(eth[0])
          if (page == "walletSignIn" ) {
            setAccounts({ ...accounts, address: eth[0], url: "/xln/wallet" });
          }

          if( page == "wallet" && users.accountCreated){
            if (users.media == false) {
                setAccounts({ ...accounts, url: '/xln/wallet/file-upload'})
           }
        }

        } catch {
          console.error("User denied accounts access!");
          setContentText(content.errorText);
        }
      } else if (window.web3) {
        provider = window.web3.currentProvider;
      } else if (!process.env.production) {
        provider = new Web3.providers.HttpProvider("http://localhost:7545");
      }

      setWeb3Api({
        //  web3: new Web3(provider),
        provider,
      });
    };

    loadProvider();
  }, [ blockchain.address]);

  useEffect(() => {
    const getAccount = async () => {
    const accounts = await web3Api.web3.eth.getAccounts();
      setAccounts(accounts[0]);
    };

    web3Api.web3 && getAccount();
  }, [web3Api.web3]);

  useEffect(() => {
    if(users.redirect){
      setAccounts({ ...accounts, url: users.redirect })
    }
    
      }, [ users.redirect])

  const renderTemplate = templateData.filter(
    ({ type }, index) => page == type
  )[0];

  renderTemplate.options.text = contentText;


  return (
    <div className="xln-setup-container">
    { users.loading == false && <TemplateLayout
        content={content}
        templateData={renderTemplate}
      />
    }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    assets: state.assets,
    auth: state.auth,
    blockchain: state.blockchain,
    shares: state.shares,
    users: state.users
  };
};

const mapDispatchToProps = {
  loadNFTs,
  getAddress,
  getContractAddress,
  getUserShares,
  loggedInUserAddress,
  updateWalletBalance,
};

export default connect(mapStateToProps, mapDispatchToProps)(XLN);
