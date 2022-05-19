const ConnectWallet = ({ connect }) => {
    return(
        <div>
            <button className='btn btn btn-success' onClick={() => connect()}>Metamask Wallet</button>
            <button className='btn btn btn-primary' onClick={() => connect()}>Wallet Connect</button> 
        </div>
    )
}


export default ConnectWallet;