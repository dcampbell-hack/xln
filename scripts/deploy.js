const Token = artifacts.require("XLN_Token");
const ICO = artifacts.require("XLN_ICO");
const web3 = require('web3');

module.exports = async function(deployer) {
    const totalSupply =  5444444671; //5.4B

    //Token
    await deployer.deploy(
        Token,
        'Medallion XLN', //name
        '$XLN', //sticker
        totalSupply
    );
    const token = await Token.deployed();

    //ICO
    await deployer.deploy(
        ICO,
        token.address,
        592200, // duration (592200s = 1 week)
        web3.utils.toWei('2', 'milli'), // price of 1 token in DAI (wei) (= 0.002 DAI. 0.002 * 10M = 20,000 DAI ~= 20,000 USD)
        totalSupply, //_availableTokens for the ICO. can be less than maxTotalSupply
        200, //_minPurchase (in DAI)
        5000 //_maxPurchase (in DAI)
    );
    const ico = await ICO.deployed();
    await token.updateAdmin(ico.address);
    await ico.start();
};