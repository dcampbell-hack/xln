const ConnectWallet = ({ metaMask, walletConnect }) => {
    return(
        <div className="wallet-btn-container">
            <button className='btn btn btn-success' onClick={() => metaMask()}>Metamask Wallet</button>
            <button className='btn btn btn-primary' onClick={() => walletConnect()}>Wallet Connect</button> 
        </div>
    )
}


export default ConnectWallet;