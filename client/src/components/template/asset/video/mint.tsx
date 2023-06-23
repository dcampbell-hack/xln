import React, { useState } from 'react';
import { useWeb3Context } from 'web3-react';
import { abi, address } from './VideoNFT.json';

const  MintVideo: React.FC = () => {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { library } = useWeb3Context();

  const handleMint = async () => {
    try {
      // get the contract instance
      const contract = new library.eth.Contract(abi, address);
      // estimate the gas required for the mint function
      const gasEstimate = await contract.methods.mint(url, title, description).estimateGas();
      // call the mint function
      const tx = await contract.methods.mint(url, title, description).send({ from: yourAddress, gas: gasEstimate });
      console.log(tx);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        type='text'
        value={url}
        onChange={e => setUrl(e.target.value)}
        placeholder='Video URL'
      />
      <input
        type='text'
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder='Video title'
      />
      <input
        type='text'
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder='Video description'
      />
      <button onClick={handleMint}>Mint Video</button>
</div>
);
}

export default MintVideo;




