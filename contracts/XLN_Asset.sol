//SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

contract XLNAsset {

    string id;
    string name;
    string category;
    string slug;
    string description;
    string website;
    string createdAt;
    bool pending;
    bool minted;
    string assetType;
    address assetAddress;
    uint32 stock;
    uint32 flow;
    uint32 rating; 
    uint32 price;
    uint fee;
    address owner;
    uint32 marketcap;
    string cover;

struct Asset {
    string id;
    string name;
    string category;
    string slug;
    string description;
    string website;
    string createdAt;
    bool pending;
    bool minted;
    string assetType;
    address assetAddress;
    uint32 stock;
    uint32 flow;
    uint32 rating; 
    uint32 price;
    uint fee;
    address owner;
    uint32 marketcap;
    string cover;
}

Asset[] public asset;

// calldata is a temp var that can be m 

function newAsset(string storage _user, uint256 _stock ) public {
    asset.push(Asset(_user, _stock ));
}


}