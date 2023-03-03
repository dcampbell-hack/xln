import React, { useEffect, useState } from "react";
import Web3 from 'web3';
import { connect } from "react-redux";

// React DOM
import { 
  useNavigate 
} from "react-router-dom";

//UI
import NotFound from "../notFound";
import TemplateLayout from "../layout/template/layout";

// CSS
import "../../css/xln/XLN.scss";
import "../../css/assets/Avatar.scss";
import "../../css/templates/wallet.scss";

import {
  loadNFTs,
  metamaskAddress,
  getContractAddress,
  updateWalletBalance,
} from "../../actions/blockchain";

import { getUserShares } from "../../actions/share";

const XLN = ({
  assets,
  auth,
  blockchain,
  loadNFTs,
  getContractAddress,
  getUserShares,
  metamaskAddress,
  page,
  shares,
  users,
  xln: {
    options: { content, templateData },
  },
}) => {

  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);

  let navigate = useNavigate();


  useEffect(() => {

    if(users.isAuthenticated){
      navigate("../xln", { replace: true });
    } else {
        navigate("../login", { replace: true });
    }
  }, [ users.isAuthenticated ])

  useEffect(() => {
    // Check if the user has MetaMask installed and enabled
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      setWeb3(web3);

      // Request access to the user's accounts
      window.ethereum.enable().then(() => {
        // Get the user's accounts
        web3.eth.getAccounts().then(accounts => {
          setAccount(accounts[0]);
          metamaskAddress(accounts[0])
        });
      });
    }
  }, []);

  if (!web3 || !account) {
    return <NotFound type="Metamask:" message="Please install MetaMask to use this app."  />;
  }

  const findTemplate = templateData.find(
    ({ type }, index) => page == type
  );

  if(!findTemplate){
    return <NotFound type="Template"  />
  }


  return (
    <div className="xln-setup-container">
      {users.loading == false && (
        <TemplateLayout templateData={findTemplate} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    assets: state.assets,
    auth: state.auth,
    blockchain: state.blockchain,
    shares: state.shares,
    users: state.users,
  };
};

const mapDispatchToProps = {
  loadNFTs,
  getContractAddress,
  getUserShares,
  metamaskAddress,
  updateWalletBalance,
};

export default connect(mapStateToProps, mapDispatchToProps)(XLN);
