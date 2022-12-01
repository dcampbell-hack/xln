//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract XLNAvatar {

struct Avatar {
    string id;
    address userId;
    string fileType;
    uint256 stock;
}

Avatar[] public asset;

// calldata is a temp var that can be m 
memory, storage 
function newAsset(string storage _user, uint256 _stock ) public {
    asset.push(Asset(_user, _stock ))
}


}