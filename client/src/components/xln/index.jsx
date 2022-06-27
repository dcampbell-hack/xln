import React, { useEffect, useState } from 'react';
import { getAddress, updateWalletBalance, connectUserWallet } from "../../actions/blockchain";
import ClickThroughUI from '../utils/clickThroughUI';
import { connect } from 'react-redux';
import Panels from '../utils/panels';
import { xln } from '../../data';
import { ethers } from 'ethers';
import '../../css/xln/XLN.scss';
import '../../css/assets/Avatar.scss';


const XLN = ({ users, blockchain, xln: { infura, authentication: { userChecks } }, getAddress, updateWalletBalance, connectUserWallet }) => {

  const [web3Api, setWeb3Api ] = useState("")
  const [ accounts, setAccounts ] = useState(null);

useEffect(() => {
  const loadProvider = async () => {

    let provider = null;

    if(window.ethereum){
       provider = window.ethereum;
       try{
          await provider.request({ method: "eth_requestAccounts"});
       } catch {
         console.error("User denied accounts access!")
       }
    } else if(window.web3){
       provider = window.web3.currentProvider;
    } else if(!process.env.production){
       provider = new Web3.providers.HttpProvider("http://localhost:7545")
    }

setWeb3Api({
  web3: new Web3(provider),
  provider
})


  }

  loadProvider();

}, []);

useEffect(() => {
  const getAccount = async () => {
     const accounts = await web3Api.web3.eth.getAccounts();
     setAccounts(accounts[0]);
  }

  web3Api.web3 && getAccount()

}, [web3Api.web3])


 return (
    <div className="xln-setup-container">
       <ClickThroughUI
          users={users}
          blockchain={blockchain}
          accounts={accounts}
          steps={userChecks}
          getAddress={getAddress}
          updateWalletBalance={updateWalletBalance}
          connectUserWallet={connectUserWallet}
          />
    </div>
  );
}


const mapStateToProps = (state) => {
   return {
     blockchain: state.blockchain,
   };
 };

 const mapDispatchToProps = {
   getAddress, updateWalletBalance, connectUserWallet
 };

export default connect(mapStateToProps, mapDispatchToProps)(XLN);
