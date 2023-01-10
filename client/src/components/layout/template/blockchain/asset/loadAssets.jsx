export const LoadNFTs = (nft) => {
    return (
      <div className="flex justify-center">
        {/* <h4>Figure out how to layout later</h4> */}
        <div className="px-4"></div>
        <div className="grid grid-cols-1">
          {nfts.map((nft, i) => {
            <div key={i} className="border shadow rounded">
              <img src={nft.image} />
              <div className="p-4">
                <p style={{ height: "64px" }}>
                  {nft.name} {nft.price} ETH
                </p>
                <button onClick={() => buyNFT()}>Buy NFT</button>
              </div>
              <div className="p-5">{nft.description}</div>
            </div>;
          })}
        </div>
      </div>
    );
  };
  