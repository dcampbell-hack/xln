const { expect } = require("chai");
const { ethers } = require("hardhat");
const web3 = require("web3");

describe("XLNICO", () => {
  let token, ico, tokenAddress, icoAddress, tokenAdmin, tokenSupply;
  let accounts, account1, account2, account3, account4, account5, account6
  



  beforeEach(async () => {
    const Token = await ethers.getContractFactory('XLNToken');
    tokenSupply = 544444671;
    const decimals = 18;
     token = await Token.deploy('Medallion XLN', '$XLN',   ethers.BigNumber.from(tokenSupply.toString()) );
    await token.deployed();
    tokenAddress = token.address;
    
    // console.log('XLN Token ---> ', token)

    const ICO = await ethers.getContractFactory('XLNICO')
    ico = await ICO.deploy(
        token.address,
        300, // duration (592200s = 1 week)
        web3.utils.toWei('2', 'milli'), // price of 1 token in DAI (wei) (= 0.002 DAI. 0.002 * 10M = 20,000 DAI ~= 20,000 USD)
        tokenSupply, //_availableTokens for the ICO. can be less than maxTotalSupply
        200, //_minPurchase (in DAI)
        5000 //_maxPurchase (in DAI)
    );
  
    await ico.deployed();


    icoAddress = ico.address;
 
    await token.updateAdmin(ico.address);
    tokenAdmin = token.admin()
    await ico.start();

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

it(`Token name: Medallion XLN`, async () => {
    const name = await token.name();
    expect(name).to.equal("Medallion XLN");
  });

  it(`Token symbol: $XLN`, async () => {
      const symbol = await token.symbol();
      expect(symbol).to.equal("$XLN");
    });


  it(`Token totalSuppy: 0`, async () => {
      const supply = await token.totalSupply();
      expect( supply ).to.equal(0);
    });

    it(`gets Token contract address`, async () => {
      const address = await token.address;
      expect(address).to.equal(tokenAddress);
    });

    it(`checks Token admin`, async () => {
        const admin = await token.admin();
        expect(admin).to.equal(tokenAdmin);
      });

      it(`checks allowance on Token`, async () => {
        try{
        const allowance = await token.allowance(tokenAddress, account1 );
        expect(allowance).to.equal(0);
        } catch(err){
             console.log('Error', console.error(err))
        }
      });

      it(`checks approve on Token address`, async () => {
        const number = 3;
        const approve = await token.approve(account1, ethers.BigNumber.from(number.toString()));
        expect(approve).to.equal(approve);
      });

      it(`finds balanceOf user address`, async () => {
        const balanceOf = await token.balanceOf(account1);
        expect(balanceOf).to.equal(0);
      });

      it(`finds decimals on Token address`, async () => {
        const decimals = await token.decimals();
        expect(decimals).to.equal(18);
      });

      it(`reverts if decreaseAllowance below zero`, async () => {
        try{
            const number = 30;
            const decreaseAllowance = await token.decreaseAllowance(account1, ethers.BigNumber.from(number.toString()) );
            await decreaseAllowance.wait();
            expect( await token.decreaseAllowance(account1, 30 )  ).to.be.reverted;

            } catch(err){
                 console.log('Error', console.error(err))
            }

      });


      it(`increaseAllowance on Token`, async () => {
        try{
            const number = 100;
        const increaseAllowance = await token.increaseAllowance(account1, ethers.BigNumber.from(number.toString()) );
        await increaseAllowance.wait()

        expect( increaseAllowance ).to.equal(100);

        } catch(err) { 
            console.error(err)
        }
      });

      it(`maxTotalSupply on Token`, async () => {
        const maxTotalSupply = await token.maxTotalSupply();
        expect( maxTotalSupply ).to.equal(tokenSupply);
      });

      it(`mint new tokens but not admin`, async () => {

        try{

        // Before Transaction 
        const number = 25;
        const transaction = await token.mint.connect(account1).(icoAddress, ethers.BigNumber.from(number.toString()) );
        await transaction.wait();

        expect( transaction ).to.be.reverted;

        } catch(err){
            console.error(err)
        }

      });

      it(`transfer tokens to new owner on Token`, async () => {

        try{ 
            const transfer = await token.transfer(account1, 12);
            transfer.wait()
            console.log('Check transfer  : ', transfer  )
            expect( transfer ).to.equal(tokenAddress);
        } catch(err){
            console.error(err)
        }

      });

      it(`transferFrom tokens to new owner on Token`, async () => {
        try{ 
        const transferFrom = await token.transferFrom(account1, account2, 12);
        transferFrom.wait()
        console.log('Check transferFrom : ', transferFrom  )
        expect( transferFrom ).to.equal(tokenAddress);
    } catch(err){
        console.error(err)
    }
      });

      it(`updateAdmin tokens to new owner on Token`, async () => {
        try{ 
        const updateAdmin = await token.updateAdmin(account1);
        updateAdmin.wait()
        console.log('Check updateAdmin : ', updateAdmin  )
        expect( updateAdmin ).to.equal(account1);
        } catch(err){
            console.error(err);
        }
      });
      

  });

  describe("XLN ICO", () => {

    it(`ICO contract admin `, async () => {
     
      const admin = await ico.admin();
      console.log('Check ICO admin : ', admin, tokenAdmin, tokenAddress, icoAddress  )
      expect(admin).to.equal( tokenAdmin );
    });

    it(`ICO contract availableTokens `, async () => {
        const  availableTokens = await ico.availableTokens();
        console.log('Check ICO availableTokens : ', availableTokens  )
        expect(availableTokens).to.equal(0);
      });

      it(`ICO contract start `, async () => {
      try{
        const admin = await ico.start();
        admin.wait()
        console.log('Check ICO admin : ', admin, tokenAdmin, tokenAddress, icoAddress  )
        expect(admin).to.be.reverted;
      } catch(err) {
        console.error(err);
      }
      });

      it(`ICO buy() is less than minPurchase `, async () => {
        try{
            const maxPurchase = await ico.maxPurchase();
            const minPurchase = await ico.minPurchase();
            const availableTokens = await ico.availableTokens();
            const  buy = await ico.buy( 80 ) ;
            buy.wait()
    
            console.log('Check ICO availableTokens : ', maxPurchase, minPurchase, availableTokens )
            expect(  await token.balanceOf(account1) ).to.equal(80);
        } catch(err){
            console.log(err)
        }

      });

      it(`ICO contract buy() `, async () => {
        try{
            const maxPurchase = await ico.maxPurchase();
            const minPurchase = await ico.minPurchase();
            const availableTokens = await ico.availableTokens();
            const  buy = await ico.buy( 201 ) ;
            buy.wait()
    
            console.log('Check ICO availableTokens : ', maxPurchase, minPurchase, availableTokens )
            expect(  await token.balanceOf(account1) ).to.equal(201);
        } catch(err){
            console.log(err)
        }
      });

      it(`ICO buy() is more than maxPurchase `, async () => {
        try{
            const maxPurchase = await ico.maxPurchase();
            const minPurchase = await ico.minPurchase();
            const availableTokens = await ico.availableTokens();
            const  buy = await ico.buy( 6000 ) ;
            buy.wait()
    
            console.log('Check ICO availableTokens : ', maxPurchase, minPurchase, availableTokens )
            expect(  await token.balanceOf(account1) ).to.equal(76);
        } catch(err){
            console.log(err)
        }
      });

      it(`ICO contract dai() `, async () => {
        const  dai = await ico.dai() ;
        console.log('Check ICO dai : ', dai )
        expect(dai).to.equal(icoAddress);
      });


      it(`ICO contract Duration() `, async () => {
        const  duration = await ico.duration() ;
        console.log('Check ICO duration : ', duration )
        expect(duration).to.equal(icoAddress);
      });

      it(`ICO contract End `, async () => {
        const  end = await ico.end() ;
        console.log('Check ICO end : ', end )
        expect(end).to.equal(icoAddress);
      });


      it(`ICO contract MaxPurchase `, async () => {
        const  maxPurchase = await ico.maxPurchase() ;
        console.log('Check ICO maxPurchase : ', maxPurchase )
        expect(maxPurchase).to.equal(icoAddress);
      });

      it(`ICO contract minPurchase `, async () => {
        const  minPurchase = await ico.minPurchase() ;
        console.log('Check ICO maxPurchase : ', minPurchase )
        expect(minPurchase).to.equal(icoAddress);
      });

      it(`ICO contract price `, async () => {
        const   price = await ico.price() ;
        console.log('Check ICO price : ', price )
        expect(price).to.equal(icoAddress);
      });

      it(`ICO contract sales(address)`, async () => {
        const address = '0xfakeAddress'
        const sales = await ico.sales(address);
        console.log('Check sales : ', sales  )
        expect( sales ).to.equal(tokenAddress);
      });

      it(`ICO contract start`, async () => {
        const start = await ico.start();
        console.log('Check start : ', start  )
        expect( start ).to.equal(tokenAddress);
      });

      it(`ICO contract token`, async () => {
        const token = await ico.token();
        console.log('Check token : ', token  )
        expect( token ).to.equal(tokenAddress);
      });

      it(`ICO contract withdrawDai`, async () => {
        const withdrawDai = await ico.withdrawDai();
        console.log('Check withdrawDai : ', withdrawDai  )
        expect( withdrawDai ).to.equal(tokenAddress);
      });

      it(`ICO contract withdrawTokens`, async () => {
        const withdrawToken = await ico.withdrawTokens();
        console.log('Check withdrawTokens : ', withdrawTokens  )
        expect( withdrawTokens ).to.equal(tokenAddress);
      });

      
// ICO Smart Contract functions
// Price()
// Sales(address)
// Start()
// Token()
// withdrawDai()
// withdrawTokens()
// Admin func
// AvailableTokens func
// Buy( data )
// Dai ()
// Duration()
// End ()
// MaxPurchase()
// minPurchase()


    
  });

});