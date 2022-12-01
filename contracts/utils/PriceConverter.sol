// SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";


library PriceConverter{

    function getPrice() internal view returns(uint256) {
        // ABI 
        // Address 0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e
        AggregatorV3Interface priceFeed = AggregatorV3Interface(0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e);
        (, uint256 price,,,) = priceFeed.latestRoundData();
        // ETH in terms of USD 
        // 3000.00000000
        return price * 1e10;
    }

    function getVersion() internal view returns(uint256){
        AggregatorV3Interface priceFeed = AggregatorV3Interface(0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e);
        return priceFeed.version();
    }

    function getConversionRate(uint256 ethAmount ) internal view return (uint256) {
        uint256 ethPrice = getPrice();
        uint256 ethAmountInUsd = ( ethPrice * ethAmount ) / 1e18;
        return ethAmountInUsd;
    }


}