

import { useEffect, useState } from 'react';
import axios from 'axios';
import Web3Modal from 'web3modal';

//import { xlnAddress, xlnMarketAddress } from '../../../../../../server/config/config';
let xlnAddress = "", xlnMarketAddress = "";

import XLN from '../../../../artifacts/contracts/XLN_Token.sol/XLNToken.json';
import XLNMarket from '../../../../artifacts/contracts/XLN_Market.sol/XLNMarket.json'
import { ethers } from 'ethers';
 
const  Asset = () => {
  const [ nfts, setNFTs ] = useState([]);
  const [loadingState, setLoadingState ] = useState('not loadded');

useEffect(() => {
   loadNFTs();
}, [])

async function loadNFTs(){
  // what we want to load:
  // *** provider, tokenContract, marketContract, data for our marketItem

const provider = new ethers.providers.JsonRpcProvider();
const tokenContract = new ethers.Contract(xlnAddress, XLN.abi, provider);
const marketContract = new ethers.Contract(xlnMarketAddress, XLNMarket.abi, provider );
const data = await marketContract.fetchMarketTokens();

console.log('Check NFT contracts', { marketContract, data })

const items = await Promise.all(data.map(async i => {
  const tokenUri = await tokenContract.tokenUri(i.tokenId);
  const meta = await axios.get(tokenUri);
  let price = ethers.utils.formatUtils(i.price.toString(), 'ether');
  let item = {
    price,
    tokenId: i.tokenID.toNumber(),
    seller: i.seller,
    owner: i.owner,
    image: meta.data.image,
    name: meta.data.name,
    description: meta.data.description,
  }

  return item;
}))

setNFTs(items);
setLoadingState('loaded');
}

// function to buy nfts for market
async function buyNFT(nft){
  const web3Modal = new Web3Modal();
  const connection = await web3Modal.connect();
  const provider = new ethers.providers.Web3Provider(connection);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(nftMarketaddress, XLNMarket.abi, signer);

  const price = ethers.utils.parseUnits(nft.price.toString(), 'ether');
  const transaction = await contract.createMarketSale(nftAddress, nft.tokenID, {
    value: price
  });

  await transaction.wait();
  loadNFTs();
}

if(loadingState === 'loaded' && !nfts.length) return <h1>No NFTs in Marketplace</h1>

  return (
    <div className="">
      <div className='px-4' style={{ maxWidth: '160px' }}>
        <div className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
          {
            nfts.map((nft, i) => (
              <div key={i} className="border shadow rounded-x1 overflow-hidden">
                <img src={nft.image} />
                <div className='p-4'>
                  <p style={{ height: '64px'}} className='text-3x1 font-semibold'>
                    {nft.name}
                  </p>
                  <div style={{height: '72px', overflow: 'hidden' }}>
                    <p className='text-gray-400'>{nft.description}</p>
                  </div>
                </div>
                <div className='p-4 bg-black'>
                  <p className='text-3x-1 mb-4 font-bold text-white'>{nft.price} ETH</p>
                  <button className='w-full bg-purple-500 text-white font-bold py-3 px-12 rounded' onClick={() => buyNFT(nft)}>
                     Buy
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
  
  
  export default Asset;