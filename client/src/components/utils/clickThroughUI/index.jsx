import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
// import { web3Modal } from '../smartContracts';
import Modal from '../modal';
import FeaturedContent from './content/featuredContent';
import ConnectWallet from './content/connectWallet';
import FFMpeg from '../ffmpeg/';
import SelectAvatar from './content/selectAvatar';
import { connectWalletExt, getBalance } from '../smartContracts';
import Template from '../layout/template';

// const provider = await web3Modal.connect();
// const web3 = new Web3(provider);

const ClickThroughUI = ({ blockchain, users, accounts, getAddress, updateWalletBalance, connectUserWallet, options }) => {

  const [ count, setCount ] = useState(0);
  const [ checks, setChecks ] = useState({});
  const [ modal, setModal ] = useState(false)
  const { balance, address } = blockchain;

  useEffect(() => {

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


  const wrappedCounter = () => setModal(!modal)
console.log({options})


const array = [
  {
    include: true,
    header: `Connect Wallet`,
    content: `Address: ${accounts ? accounts : "Not Connected"} <br/> By connecting your wallet, you agree to our Terms of Service and our Privacy Policy.`,
    // userInterface: <ConnectWallet metaMask={walletWrapper} walletConnect={wrappedCounter} />
    userInterface: <Template options={options} />
  },
  {
    include: true,
    header: "Mint an XLN Avatar",
    content: "Select an avatar from Metamask or Upload one here",
    userInterface: <SelectAvatar users={users} />
  },
  {
    include: true,
    header: `Video Editor`,
    content: "Testing out FFMpeg Video upload",
    userInterface: <FFMpeg />
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
          { modal && <Modal action={setModal} bool={modal}>
          <p>Hello</p>
          </Modal>
         }
         <FeaturedContent header={array[count].header} content={array[count].content} userInterface={array[count].userInterface} />
      </div>
  )
}

export default ClickThroughUI;
