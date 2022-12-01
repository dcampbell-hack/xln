//SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

contract XLNAsset {

struct Asset {
    string id;
    address user;
    string username;
    string fileType;
    uint256 stock;
}

Asset[] public asset;

// calldata is a temp var that can be m 
memory, storage 
function newAsset(string storage _user, uint256 _stock ) public {
    asset.push(Asset(_user, _stock ))
}


}