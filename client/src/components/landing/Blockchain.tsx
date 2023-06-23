import React from 'react'
import FormatLayout from '../layout';

import { BlockchainProps } from '../../types/landing';

interface BlockchainWrap {
    blockchain: BlockchainProps
}

const Blockchain: React.FC<BlockchainWrap> = ({ blockchain }) => {

const renderBlockchainObj = () => blockchain.smartchain.map(({ type, options}) => <FormatLayout key={options.id} type={type} options={options}    />)


    return(
        <div className="xln-blockchain panel-padding">
            { renderBlockchainObj()}
        </div>
    )
}

export default Blockchain;