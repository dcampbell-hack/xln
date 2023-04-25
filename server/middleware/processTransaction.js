import Wallet from '../model/Wallet.js';
import User from '../model/User.js';
import Share from '../model/asset/Share.js';
import ErrorResponse from '../utils/errorResponse.js';

export const returnWallets = async function( array ){
  
const wallets = [];

const getWallets = async (userId) => { 
    const userWallet = await Wallet.findOne({ user: userId }) 
    wallets.push(userWallet)
}


array.forEach(arr => { 
  if( arr && arr.role){
    return  getWallets(arr._id);
  }  else {
   return getWallets(arr.user) 
  }
});

return wallets;

}


export const processTransaction = async function(res, wallets, txInfo ){

    if(!wallets){
        return( new ErrorResponse('Wallets were not found', 404) )
    }

    if(!txInfo){
      return( new ErrorResponse('Transaction Info was not found', 404) );
    }


const { share, assetOwner, buyer, seller, shareholders, systems, supernode, masternode } = wallets;
const { minReward, minBenefit, price} = txInfo;

const minPrice = minReward + minBenefit;

// Resell price for seller
const resellPrice = price - minPrice;

// Calculate Share holders fee
const shareholderFee = minBenefit * 0.7;
const sharesFee = shareholders && shareholders.length / shareholderFee;

// Calculate System Fee
const systemsFee = minBenefit * 0.3;
const distributeFee = systemsFee / systems.length;

const supernodePortion = systemsFee * 0.03;
const supernodeFee = supernode && supernode.length / supernodePortion;

const masternodePortion = systemsFee * 0.02;
const masternodeFee = masternode && masternode.length / masternodePortion;

const sendTx = async (address, fee, op = 'add' ) => {
  const user = await Wallet.findOne({ user: address })

  !user && new ErrorResponse('No system user found', 404);
  let add, addUser, sub, subUser;
  if(user && user.balance){
       if(op === 'add'){ 
         add = await Wallet.findOneAndUpdate({ user: address }, { balance: Number((user.balance + fee).toFixed(5)) });  
         //addUser =  await User.findOneAndUpdate({ user: user.user }, { totalBalance: calculateTotalBalance(all user's wallets) }) 
        }

       if(op === 'sub'){ 
         sub = await Wallet.findOneAndUpdate({ user: address }, { balance: Number((user.balance - fee).toFixed(5)) });   
        // subUser =  await User.findOneAndUpdate({ user: user.user }, { totalBalance: calculateTotalBalance(all user's wallets) }) 

        
        }
       console.log(`User balance ------------------ ${op} ----- ${fee}, ${add}, ${sub} ${typeof add}, ${typeof sub} ---------- Update user's totalBalance.` )
    }

}

// PROCESS TRANSACTION

// Change ownership from seller to buyer 
const shareModel = await Share.findOneAndUpdate({ _id: share }, { user: buyer})

// Send payment to the asset owner's wallet
sendTx(assetOwner, minReward)

// Add payment to the seller's wallet
sendTx(seller, resellPrice)

// Subtract payment to the buyer's wallet
sendTx(buyer, price, 'sub')

// Distribute fee to all shareholders
shareholders.length > 0 && shareholders.forEach(shareholder => sendTx(shareholder, sharesFee))

// Distribute fee to all systems
systems.length > 0 && systems.forEach(system => sendTx(system, distributeFee))

// Distribute to all supernodes
supernode && supernode.length > 0 && supernode.forEach(node => sendTx(node, supernodeFee));

// Distribute to all masternodes
masternode && masternode.length > 0 && masternode.forEach(node => sendTx(node, masternodeFee));

if(!shareModel){
  return 'New'
} else {
  return 'Resell'
}

}

