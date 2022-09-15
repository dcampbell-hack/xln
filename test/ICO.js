const { expect } = require("chai");
const { ethers } = require("hardhat");
const web3 = require("web3");
const keyData = require("../server/config/p-key.txt");

const tokens = (n) => ethers.utils.parseUnits(n.toString(), 'ethers');
const dai = (n) => Number(web3.utils.toWei(n.toString(), "picoether"));
const ether = n => ethers.utils.parseEther(n.toString())

async function buyTokens(contract, account, purchase){
        //Buy Tokens in ICO
        transaction = await contract.connect(account).buy(purchase);
        await transaction.wait();

        const gasLimit = await contract.estimateGas.buy(purchase);   
        const gasPrice = await ethers.provider.getGasPrice();
       // const data = await transaction.encodeABI();
       const data = await transaction.data;        
       const nonce = await ethers.provider.getTransactionCount(
        buyer.address,
        "latest"
      );
      const r = transaction.r;
      const s = transaction.s;
      const v = transaction.v;



        const signedTx = await ethers.utils.serializeTransaction(
          {
            to:  contract.address,
            data,
            gasLimit,
            nonce,
            value: ethers.BigNumber.from(purchase.toString()),
            gasPrice,
            chainId: transaction.chainId,      
          },
           {
            r,
            s,
            v  
           }
        );

        const receipt = await ethers.utils.parseTransaction(signedTx)
        return receipt;
}

describe("XLNICO", () => {
  let token, ico, accounts, company, availableTokens;
  let tokenAddress, icoAddress, tokenAdmin, tokenSupply, maxSupply, deployer;
  let purchasePrice = dai(50),
  tokenPrice = dai(0.07),
  duration = 300, 
  minPurchase = dai(15), 
  maxPurchase = dai(170);

  beforeEach(async () => {
    accounts = await ethers.getSigners();
    deployer = accounts[0];
    buyer = accounts[1];

    const Token = await ethers.getContractFactory("XLNToken");
    maxSupply = 544444671;
    // tokenSupply = 707777807;
    tokenSupply = 176944452
    const decimals = 18;
    token = await Token.deploy(
      "Medallion XLN",
      "$XLN",
      ethers.BigNumber.from(tokenSupply.toString())
    );
    await token.deployed();
    tokenAddress = token.address;

    // console.log('Check maxPurchase - minPurchase - purchasePrice, tokenSupply  ---> ', { maxPurchase, minPurchase, purchasePrice, tokenSupply }  )

    const ICO = await ethers.getContractFactory("XLNICO");
    ico = await ICO.deploy(
      token.address,
      duration, // duration (592200s = 1 week)
      tokenPrice,
      // web3.utils.toWei("7", "milli"), // price of 1 token in DAI (wei) (= 0.002 DAI. 0.002 * 10M = 20,000 DAI ~= 20,000 USD)
      tokenSupply, //_availableTokens for the ICO. can be less than maxTotalSupply
      minPurchase, //_minPurchase (in DAI)
      maxPurchase //_maxPurchase (in DAI)
    );

    await ico.deployed();

    icoAddress = ico.address;

    await token.updateAdmin(deployer.address);
    tokenAdmin = await token.admin();

    await token.connect(deployer).mint(deployer.address, 100000)
    await token.connect(deployer).mint(ico.address, 59028669 )
    await ico.start();




    // deployer.sendTransaction()

    //const price = await ico.price();
    // console.log("XLN Token ---> ", token);

    // transaction = await token.increaseAllowance( buyer.address, maxPurchase )
    // await transaction.wait();
  });

  describe("Deployment", () => {
    it("gets Medallion XLN token address", async () => {
      const address = await token.address;
      expect(address).to.equal(tokenAddress);
    });

    it("Medallion XLN ICO address", async () => {
      const address = await ico.address;
      expect(address).to.equal(icoAddress);
    });
  });

  describe("XLN Token", async () => {
    it(`Token details`, async () => {
      try {
        const name = await token.name();
        console.log("Name of token", name);
        expect(name).to.equal("Medallion XLN");

        const symbol = await token.symbol();
        console.log("Symbol of token", symbol);
        expect(symbol).to.equal("$XLN");

        const supply = await token.totalSupply();
        console.log("Supply of tokens minted so far", supply);
        expect(supply).to.equal(59128669);

        const address = await token.address;
        console.log("Address of token", address);
        expect(address).to.equal(tokenAddress);

        const checkICOAddress = await ico.address;
        console.log('ICO address', checkICOAddress)
        expect(checkICOAddress).to.equal(ico.address)

        const admin = await token.admin();
        console.log("Admin of Token", admin);
        expect(admin).to.equal(tokenAdmin);

        // ICO token address should be the same as token address
        const icoToken = await ico.token();
        console.log(
          "ICO Token Address and token address equals",
          icoToken == tokenAddress
        );
        expect(icoToken).to.equal(tokenAddress);

        // check if ICO is active
        const isActive = await ico.icoIsActive();
        console.log("Is ICO Active?", isActive);
        expect(isActive).to.equal(true);

        // check if ICO is active
        const icoDuration = await ico.duration();
        console.log("How long will it be active for?", icoDuration);
        expect(icoDuration).to.equal(duration);

        // check if ICO availableTokens
        const icoAvailableTokens = await ico.availableTokens();
        console.log("How many tokens are available?", icoAvailableTokens);
        expect(icoAvailableTokens).to.equal(tokenSupply);

        // check ICO price
        const icoPrice = await ico.price();
        console.log("The price per tokens in the ICO is ", icoPrice);
        expect(icoPrice).to.equal(tokenPrice);

        // check  all sales from buyer of ICO Token
        const icoBuyerSales = await ico.sales(buyer.address);
        console.log("This buyer has bought ", icoBuyerSales.amount);
        expect(icoBuyerSales.amount).to.equal(0);

        //  Admin starts ICO
        // transaction = await ico.connect(deployer).start();
        // await transaction.wait();
        // expect(transaction).to.be.reverted;
        // console.log("Admin starts ICO");

        // Checks buyer balance
        let balance = await buyer.getBalance();
        console.log(
          `Balance of ${buyer.address} is ${ethers.utils.formatEther(balance)}`
        );
        // expect(balance.toString().slice(0, 18)).to.equal(
        //   tokens(balance, "ether").toString().slice(0, 18)
        // );

        // check if ICO is active
        const icoMinPurchase = await ico.minPurchase();
        console.log("What is the minPurchase?", icoMinPurchase);
        expect(icoMinPurchase).to.equal(minPurchase);

        // check if ICO availableTokens
        const icoMaxPurchase = await ico.maxPurchase();
        console.log("What is maxPurchase?", icoMaxPurchase);
        expect(icoMaxPurchase).to.equal(maxPurchase);

        // Deployer Approves Token
        transaction = await token.approve( buyer.address, purchasePrice );
        console.log("Token approval", buyer.address );
        expect(transaction.to).to.equal(tokenAddress);

        // Check increased allowance
        transaction = await token.connect(buyer).increaseAllowance(buyer.address, purchasePrice);
        await transaction.wait();
        console.log("Has Allowance increased?", transaction.to, tokenAddress);
        expect(transaction.to).to.equal(tokenAddress);

        // Check allowance
        const allowance = await token
          .connect(buyer)
          .allowance(ico.address, buyer.address);
        console.log("Checking Token Allowance", allowance );
        expect(allowance).to.equal(0);

        //Buy Tokens in ICO
        await buyTokens(ico, buyer, purchasePrice);
        const buyerBalance = await ico.sales(buyer.address); 
        console.log('Buyer Balance ---->', buyerBalance.amount )
        
        await token.connect(deployer).mint(buyer.address, buyerBalance.amount)
        console.log('Tokens owned by buyer', await token.balanceOf(buyer.address) )
        expect( Math.round(await ethers.BigNumber.from(buyerBalance.amount)) ).to.equal( Math.round( await token.balanceOf(buyer.address) ) )
     
         
      } catch (err) {
        console.log(err);
      }
    });

  
  });

});
