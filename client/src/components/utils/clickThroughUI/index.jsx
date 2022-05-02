import { useState } from 'react';
import FeaturedContent from './content/featured-content';
import { metaMaskWalletExt } from '../smartContracts';

const ClickThroughUI = () => {

  const [ count, setCount ] = useState(0);
  const [ balance, setBalance ] = useState('')
const array = [
  {
    include: true,
    header: `Connect Wallet ${balance}`,
    content: "By connecting your wallet, you agree to our Terms of Service and our Privacy Policy.",
    userInterface: <div>
      <button className='btn btn btn-success' onClick={() => metaMaskWalletExt(setBalance)}>Metamask Wallet</button>
      <button className='btn btn btn-success' onClick={() => walletConnectExt()}>Wallet Connect</button> 
    </div>
  },
  {
    include: true,
    header: "KYC",
    content: "Know Your Customer (KYC)",
    userInterface: <div>UI Two</div>
  },
  {
    include: true,
    header: "AML",
    content: "AML Panel",
    userInterface: <div>UI Three</div>
  },
];


const wrappedCounter = () => {
  if(count < array.length - 1 ){
    setCount(count + 1);
  } else {
    setCount(0);
  }

}



  return(
      <div className="click-through-ui-container">
         <FeaturedContent header={array[count].header} content={array[count].content} userInterface={array[count].userInterface} />
         <button className="btn btn-primary btn-m" onClick={() => wrappedCounter()}>Next</button>
      </div>
  )
}

export default ClickThroughUI;