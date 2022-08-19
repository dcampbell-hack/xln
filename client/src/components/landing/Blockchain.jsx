import FormatLayout from '../utils/layout';


const Blockchain = ({ blockchain }) => {

const renderBlockchainObj = () => blockchain.smartchain.map(({ type, options}) => <FormatLayout key={options.id} type={type} options={options}    />)


    return(
        <div className="xln-blockchain panel-padding">
            { renderBlockchainObj()}
        </div>
    )
}

export default Blockchain;