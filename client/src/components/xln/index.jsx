import React, { useEffect, useState } from 'react';
import { getAddress, updateWalletBalance } from "../../actions/blockchain";

import ClickThroughUI from '../utils/clickThroughUI';
import { connect } from 'react-redux';
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Panels from '../utils/panels';
import { xln } from '../../data';
import { ethers } from 'ethers';
import '../../css/xln/XLN.scss';


const XLN = ({ users, xln: { infura, authentication: { userChecks } }, getAddress, updateWalletBalance }) => {


const [ userWallet, setUserWallet ] = useState({ balance: null, address: null });


useEffect(() => {

function run(){
   setUserWallet({ ...userWallet, balance: ethers.utils.formatEther('0.1') })
   // connectUserWallet({ 
   //    balance: userWallet.balance, 
   //    address: userWallet.address, 
   //    username: users.username,
   //    avatar: users.avatar,
   //    cover: users.cover
   // })
}

if(userWallet.address){
 run();
}

}, [ userWallet.address, userWallet.balance ]);


 return (
    <div className="xln-setup-container">
       <ClickThroughUI steps={userChecks} getAddress={getAddress} updateWalletBalance={updateWalletBalance} />
    </div>
  );
}


const mapStateToProps = (state) => {
   return {
     blockchain: state.blockchain,
   };
 };
 
 const mapDispatchToProps = {
   getAddress, updateWalletBalance
 };

export default connect(mapStateToProps, mapDispatchToProps)(XLN);
