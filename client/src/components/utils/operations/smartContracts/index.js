import { xln } from '../../../../data/index';
// import Web3Modal from 'web3modal';
// import WalletConnect from '@walletconnect/web3-provider';

import { ethers, providers } from 'ethers';
// import WalletConnectProvider from "@walletconnect/web3-provider";

const metamask = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${xln.infura}`);

//  Create WalletConnect Provider
// const walletconnect = new WalletConnectProvider({
//    infuraId: xln.infura,
//  });

const account1 = "0x77bf38287383A207d826651b29f205d44f26E720";
const account2 = "0x75cFC852f0A83DF3b19ead24793240B37b7DfadD";
const privatekey = "8091a0e441ce7178d62c7e0c24dc1281ac6f2c6925d3a190d308cb477a483795";
const wallet = new ethers.Wallet(privatekey, metamask);

const ERC20_ABI = [
   "function balanceOf(address) view returns (uint)",
   "function transfer(address to, uint amount) view returns (bool)",
];

//  Enable session (triggers QR Code modal)
// await walletconnect.enable();

const chainLinkContractAddress = "0xa36085F69e2889c224210F603D836748e7dC0088";
const contract = new ethers.Contract(chainLinkContractAddress, ERC20_ABI, metamask);




export const getBalance = async (checks, setChecks, updateWalletBalance) => {
const value = await metamask.getBalance(checks.address);
const balance = ethers.utils.formatEther(value);
updateWalletBalance(balance)
setChecks({ ...checks, balance });
}

// export const walletConnectExt = () => new providers.Web3Provider(walletconnect);

export const connectWalletExt = async (checks, setChecks) => {

    if(window.ethereum){
      console.log('Ethereum ---')
       window.ethereum.request({ method: 'eth_requestAccounts'})
       .then(result => {
          let address = result[0];
          setChecks({ ...checks, address});
       })
       .catch(err => console.log(err));
 
  } else {
      return () => console.log('Install Metamask');
  }
 
 }


//  export const web3Modal = new Web3Modal({
//     network: "mainnet",
//     providerOptions: {
//        walletconnect: {
//           infuraId: xln.infura
//        }
//     }
//  }) 

 export const readContract = async () => async () => {
    const name = await contract.name();
    const symbol = await contract.symbol();
    const totalSupply = await contract.totalSupply();
  //  const balance = await contract.balanceOf('0x5d38b4e4783e34e2301a2a36c39a03c45798c4dd')
 
    console.log('Create Avatar', { name, symbol, tokenSupply: ethers.utils.formatEther(totalSupply) });
    //console.log('Checlk balance ---------', { balance })
 }


 export const sendTx = async () => {

    // Before Balance 
    const senderBalanceBefore = await metamask.getBalance(account1);
    const recieverBalanceBefore = await metamask.getBalance(account2);
    
    console.log('Sender balance before: ', ethers.utils.formatEther(senderBalanceBefore))
    console.log('Reciever balance before: ', ethers.utils.formatEther(recieverBalanceBefore))
    
       const tx = await wallet.sendTransaction({ 
          to: account2 , 
          value: ethers.utils.parseEther("0.001") 
       });
    
       await tx.wait();
    
    
    // After Balance 
    const senderBalanceAfter = await metamask.getBalance(account1);
    const recieverBalanceAfter = await metamask.getBalance(account2);
    
    console.log('Sender balance after: ', ethers.utils.formatEther(senderBalanceAfter))
    console.log('Reciever balance after: ', ethers.utils.formatEther(recieverBalanceAfter))
    
    }


    export const functionFour = async () => {
        console.log('SMART CONTRACT TX');
        const balance = await contract.balanceOf(account1);
        const contractWithWallet = contract.connect(wallet);
        const tx = await contractWithWallet.transfer(account2, balance);
        await tx.wait();
      }


