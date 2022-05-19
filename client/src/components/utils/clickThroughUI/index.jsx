import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import FeaturedContent from './content/featured-content';
import ConnectWallet from './content/connect-wallet';
import SelectAvatar from './content/select-avatar';
import { connectWalletExt, getBalance } from '../smartContracts';

const ClickThroughUI = ({ blockchain, users, getAddress, updateWalletBalance, connectUserWallet }) => {

  const [ count, setCount ] = useState(0);
  const [ checks, setChecks ] = useState({})
const { balance, address } = blockchain;

  useEffect(() => {

    console.log('Checks ----', checks, users.address);

    if(users.accountCreated){
      setCount(1);
      console.log('Check Account Created', count)
      return;
  }

    async function balanceLoader(){
      await getBalance(checks, setChecks, updateWalletBalance);
      console.log('2 Address', { address, balance, checks });
    }

    if(address && !checks.balance ){
        balanceLoader();
    }

    if(checks.balance && !users.accountCreated ){
       console.log('3 Address & Balance', checks.balance )
       connectUserWallet({ id: users.id, active: true, address, balance: checks.balance, accountCreated: true })
    }

    if(checks.address){
      getAddress(checks.address);
      return;
    } 

  }, [ checks.address, checks.balance ]);


  const walletWrapper = async () => {
    await connectWalletExt(checks, setChecks);
  };


  const wrappedCounter = () => {
    if(count < array.length - 1 ){
      setCount(count + 1);
    } else {
      setCount(0);
    }
  
  }
  


const array = [
  {
    include: true,
    header: `Connect Wallet`,
    content: "By connecting your wallet, you agree to our Terms of Service and our Privacy Policy.",
    userInterface: <ConnectWallet connect={walletWrapper } />
  },
  {
    include: true,
    header: "Add an Avatar",
    content: "Select an avatar from Metamask or Upload one here",
    userInterface: <SelectAvatar />
  },
  {
    include: true,
    header: "Invest In ICO",
    content: "AML Panel",
    userInterface: <div>
      Send money to ICO: Buy 1 ETH, 5 ETH, 10 ETH, 50 ETH, 100 ETH
    </div>
  },
];





  return(
      <div className="click-through-ui-container">
         <FeaturedContent header={array[count].header} content={array[count].content} userInterface={array[count].userInterface} />
      </div>
  )
}

export default ClickThroughUI;