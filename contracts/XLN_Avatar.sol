//SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

contract XLNAvatar {

    string id;
    address userAddress;
    string firstName;
    string lastName;
    string username;
    string bio;
    string email;
    string media;
    string role;
    string createdAt;
    string avatar;
    string cover;
    uint32 assetsOwned;
    uint32 sharesOwned;  

struct Avatar {
    string id;
    address userAddress;
    string firstName;
    string lastName;
    string username;
    string bio;
    string email;
    string media;
    string role;
    string createdAt;
    string avatar;
    string cover;
    uint32 assetsOwned;
    uint32 sharesOwned;   
}

Avatar[] public avatar;

constructor(){
   userAddress = msg.sender;
}

}