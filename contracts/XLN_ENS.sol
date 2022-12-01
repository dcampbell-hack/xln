//SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

import '@openzeppelin/contracts/token/ERC721/IERC721.sol';
contract XLNENS {
    uint256 public itemCount;

    struct Item{
        uint256 itemId;
        string name;
        uint256 tokenId;
        uint256 price;
        bool listed;
        address payable seller;
    }

mapping( uint256 => Item) public items;
// ENS contract address 
// https://docs.ens.domains/
IERC721 public immutable ensContract;

constructor(){
    ensContract = IERC721(0x57f188F19b14fC0dF6Fd9B2acc9Af147eA85);
}

// Function to list the item for sale, approve this contract
function listENS( string memory _name, uint256 _tokenId, uint256 _price) public {
    require( _price > 0, "Price should be greater than 0");
    itemCount++;
    items[itemCount] = Item(
        itemCount,
        _name,
        _tokenId,
        _price,
        true,
        payable(msg.sender)
    );
}

// Function to buy the ENS - ie - transferFrom
function buyENS( uint256 _itemId ) public payable {
    Item memory eachItem = items[_itemId];
    require(msg.value >= eachItem.price, "Price sent is not correct");
    require(_item > 0 && _itemId <= item, "Wrong itenId");
    require( eachItem.listed == true, "This item has not been listed for sale");
    ensContract.transferFrom( eachItem.seller, msg.sender, eachItem.tokenId );
    eachItem.listed = false;
    ( bool sent, ) = eachItem.seller.call{ value: msg.value }("");
    require(sent, "Failed to send Ether");
}

recieve() external payable{}
 
}