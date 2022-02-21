import FormatLayout from '../utils/layout/';


const Blockchain = ({ blockchain }) => {

const renderBlockchainObj = () => blockchain.smartchain.map(({ type, options}) => <FormatLayout key={options.id} type={type} options={options}    />)


    return(
        <div className="xln-blockchain panel-padding">
            <div className='blockchain-header'>
                <h1>{blockchain.header}</h1>
            </div>
            { renderBlockchainObj()}
        </div>
    )
}

export default Blockchain;