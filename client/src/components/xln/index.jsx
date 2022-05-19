import React, { useEffect, useState } from 'react';
import { getAddress, updateWalletBalance, connectUserWallet } from "../../actions/blockchain";

import ClickThroughUI from '../utils/clickThroughUI';
import { connect } from 'react-redux';
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Panels from '../utils/panels';
import { xln } from '../../data';
import { ethers } from 'ethers';
import '../../css/xln/XLN.scss';
import '../../css/assets/Avatar.scss';



const XLN = ({ users, blockchain, xln: { infura, authentication: { userChecks } }, getAddress, updateWalletBalance, connectUserWallet }) => {


const [ userWallet, setUserWallet ] = useState({ balance: null, address: null });


// useEffect(() => {

// function run(){
//    setUserWallet({ ...userWallet, balance: ethers.utils.formatEther('0.1') })
//    connectUserWallet({ 
//       balance: userWallet.balance, 
//       address: userWallet.address, 
//       username: users.username,
//       avatar: users.avatar,
//       cover: users.cover
//    })
// }

// if(userWallet.address){
//  run();
// }

// }, [ userWallet.address, userWallet.balance ]);


 return (
    <div className="xln-setup-container">
       <ClickThroughUI 
          users={users} 
          blockchain={blockchain} 
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
