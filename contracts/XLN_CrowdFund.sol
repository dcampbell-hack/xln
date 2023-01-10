// SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

import './utils/PriceConverter.sol';

contract XLNCrowdFund {

    using PriceConverter for uint256;

    uint256 public minimumUSD = 50;
    address[] public funders;
    mapping( address => uint256 ) public addressToAmountFunded;

    address public owner;

    constructor() {
        owner = msg.sender;
        priceFeed = AggregatorV3Interface(0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e);
    }

    function fund() public payable{
        require( msg.value.getConversionRate() >= minimumUSD, "Insufficent value" );
        funders.push(msg.sender);
        addressToAmountFunded[msg.sender] += msg.value;
    }

    function withdraw() public {
        require( msg.sender == owner, "Sender is not owner!" );
        for( uint256 i = 0; i < funders.length; i++ ){
            // code
           address funder =  funders[i];
           addressToAmountFunded[funder] = 0;
        }
        // reset the array 
        funders = new address[](0);

       // call
      ( bool callSuccess, bytes dataReturned ) = payable(msg.sender).call({ value: address(this).balance }("");
      require( callSuccess, "Call failed");
    }

modifier onlyOwner{
    require(msg.sender == owner, "Sender is the owner");
    _;
}

}










































?≥    }

    //function withdraw(){}

}