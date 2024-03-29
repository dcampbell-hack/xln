//SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/utils/math/SafeMath.sol';
import './XLN_Token.sol';
import "hardhat/console.sol";

contract XLNICO {
    using SafeMath for uint;
    struct Sale {
        address investor;
        uint amount;
        bool tokensWithdrawn;
    }
    mapping(address => Sale) public sales;

    bool public icoIsActive; 
    address public admin;
    uint256 public end;
    uint256 public duration;
    uint256 public price;
    uint256 public availableTokens;
    uint256 public minPurchase;
    uint256 public maxPurchase;
    XLNToken public token;
    IERC20 public dai; 

    constructor (
        address tokenAddress,
        uint _duration,
        uint _price,
        uint _availableTokens,
        uint _minPurchase,
        uint _maxPurchase) {

        token = XLNToken(tokenAddress);
        dai = IERC20(0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3);

        require(_duration > 0, 'duration should be > 0');
        require(
            _availableTokens > 0 && _availableTokens <= token.maxTotalSupply(),
            '_availableTokens should be > 0 and <= maxTotalSupply'
        );
        require(_minPurchase > 0, '_minPurchase should be > 0');
        require(
            _maxPurchase > 0 && _maxPurchase <= _availableTokens,
            '_maxPurchase should be > 0 and <= _availableTokens'
        );

        admin = msg.sender;
        duration = _duration;
        price = _price;
        availableTokens = _availableTokens;
        minPurchase = _minPurchase;
        maxPurchase = _maxPurchase;
        icoIsActive = false;
    }

    function start()
        external
        onlyAdmin()
        icoNotActive() {
            icoIsActive = true;
            end = block.timestamp + duration;
    }

    function buy(uint daiAmount) external payable icoActive() {
            require(
                daiAmount >= minPurchase && daiAmount <= maxPurchase,
                'have to buy between minPurchase and maxPurchase'
            );
            uint tokenAmount = daiAmount.div(price);
            require(
                tokenAmount <= availableTokens,
                'Not enough tokens left for sale'
            );
            

            dai.transferFrom(msg.sender, address(this), daiAmount);
              
            sales[msg.sender] = Sale(
                msg.sender,
                tokenAmount,
                false
            );

            console.log('Print address', msg.sender );
    }

    function withdrawTokens()
        external
        icoEnded() {
        Sale storage sale = sales[msg.sender];
        require(sale.amount > 0, 'only investors');
        require(sale.tokensWithdrawn == false, 'tokens were already withdrawn');
        sale.tokensWithdrawn = true;
        token.transfer(sale.investor, sale.amount);
    }

    function withdrawDai(uint amount)
        external
        onlyAdmin()
        icoEnded() {
            dai.transfer(admin, amount);
    }

    modifier icoActive() {
        require(
            end > 0 && block.timestamp < end && availableTokens > 0,
            'ICO must be active'
        );
        _;
    }

    modifier icoNotActive() {
        require(end == 0, 'ICO should not be active');
        _;
    }

    modifier icoEnded() {
        require(
            end > 0 && (block.timestamp >= end || availableTokens == 0),
            'ICO must have ended'
        );
        _;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, 'only admin');
        _;
    }
}