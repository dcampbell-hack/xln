// Utils
const ErrorResponse = require('../utils/errorResponse');
const axios = require('axios');

// Models
const Asset = require('../model/Asset');
const User = require('../model/User');
const Share = require('../model/Share');
const Transaction = require('../model/Transaction');
const Wallet = require('../model/Wallet');
const Shareholder = require('../model/Shareholder');

// Middleware
const { returnWallets, processTransaction } = require('../middleware/processTransaction');
const getUniqArr = require('../middleware/getUniqueArr');
const asyncHandler = require('../middleware/async');
const { checkConditionals, preventPublicKnowledge, preventSale } = require('../middleware/checkIfValidAsset')



//@desc Get Transaction
//@route GET /api/v1/shares/:shareId/tx/:txId
//@access Public 
exports.getTransaction = asyncHandler(async (req, res, next ) => {

    if(req.params.id){
        const tx = await Transaction.findById(req.params.id).populate({
            path: 'asset',
            select: 'name description'
        })

        if(!tx){
            return next(
                new ErrorResponse(`No share with the id of ${req.params.id}`, 404)
            )
        }

        return res.status(200).json({
            success: true,
            count: tx.length,
            data: tx
        })
    } else {
        res.status(200).json(res.advancedResults)
    }
})

//@desc Get Transaction
//@route GET /api/v1/shares/:shareId/tx      
//@access Public 
exports.getTransactions = asyncHandler(async (req, res, next ) => {



if(req.params.assetId){

await preventPublicKnowledge(next, req.params.assetId)

const tx = await Transaction.find({ asset: req.params.assetId });

return res.status(200).json({
    success: true,
    count: tx.length,
    data: tx
})

} else {
    res.status(200).json(res.advancedResults);
}

})

//@desc Create Transaction
//@route GET /api/v1/shares/:shareId/tx
//@access Public 
exports.createTransaction = asyncHandler(async (req, res, next ) => {

req.body.share = req.params.shareId;
req.body.buyer = req.user.id;

// Find asset with specified id
const share = await Share.findById(req.body.share);
if(share){
if(share.user === req.user.id){
    return next(new ErrorResponse(`User cannot buy a share you already own.`, 404 ));
}
}

// Find asset with asset id
const _asset = await Asset.findById(req.body.asset)

// Check conditionals
await checkConditionals(next, req.body.asset)
await preventSale(next, req.body.asset)

// Check if asset exists
if(!_asset){
    return next(new ErrorResponse(`No asset with the id of ${ _asset }`, 404 ));
}

// Find shareholders with asset id
let shareholders = await Share.find({ asset: req.body.asset  });
const uniqueShares = getUniqArr(shareholders, 'user');
if(uniqueShares.length !== 0 ){
shareholders = await returnWallets(uniqueShares)
} 

// Find shareholders with asset id
let supernodes = await Shareholder.find({ supernode: true });
supernodes = await returnWallets(supernodes);

// Find shareholders with asset id
let masternodes = await Shareholder.find({ masternode: true });
masternodes = await returnWallets(masternodes);

// Find system users
let systems = await User.find({ role: 'system' })
systems = await returnWallets(systems);

//Find buyers wallet
const buyersWallet = await Wallet.findOne({ user: req.body.buyer });
//Find seller wallet
const sellersWallet = await Wallet.findOne({ user: req.body.seller })


// Check if system users exist
if(!systems && systems.length < 1 ){
    return next(new ErrorResponse(`Transaction cannot proceed without systems users`, 404 ));
}

//Check if user has a balance
if(!buyersWallet){
    return next(new ErrorResponse(`Buyer must have a balance`, 401 ));
}

//Check if user has a balance
if(!sellersWallet){
    return next(new ErrorResponse(`Seller must have a wallet`, 401 ));
}

const shareOwner = share ? JSON.stringify(share.user) : false;

const buyerId = JSON.stringify(buyersWallet.user)
//Check if buyer already owns share
// if(shareOwner === buyerId){
//     return next(new ErrorResponse(`Buyer already owns this share.`, 401 ));
// }

//Check if share has the permission to be sold
if(share){
if(!share.resell){
    return next(new ErrorResponse(`This share is not for sale`, 401 ));
}
}

console.log('Object body ----------------------', req.body.asset, req.body.share, buyersWallet.balance,  )

//Check if user's wallet has a balance greater than zero
if(buyersWallet.balance < 0.01){
    return next(new ErrorResponse(`Please load your account`, 401 ));
}

//Check user's balance is less than price of share
const assetPrice = _asset.minReward + _asset.minBenefit
if(buyersWallet.balance < assetPrice  ){
    return next(new ErrorResponse(`You do not have enough to buy a share in this asset. Balance ${ buyersWallet.balance } is less than ${ assetPrice }.`, 401 ));
}


//Check if user's balance is too low to buy share
if(share){
if(buyersWallet.balance < share.price){
    return next(new ErrorResponse(`You do not have enough to buy share ${ buyersWallet.balance } is less than ${ share.price }`, 401 ));
}
}

//Define buyer & sellser
const buyer = buyersWallet.user;
const seller = sellersWallet.user;

if(!buyer){
    return next(new ErrorResponse(`Buyer must be valid account`, 401 )); 
}

if(!seller){
    return next(new ErrorResponse(`Seller must be a valid account`, 401 )); 
}

// Set up transaction
    const txWallets = {
        asset: _asset.id,
        share: share && req.body.share,
        assetOwner:  _asset.user,
        buyer: req.body.buyer,
        seller: req.body.seller,
        shareholders: shareholders.map(shareholder => shareholder.user), 
        systems: systems.map(system => system.user), 
        supernodes: supernodes.map(supernode => supernode.user), 
        masternodes: masternodes.map(masternode => masternode.user)
    }
    
    const txInfo = {
        price: share ? share.price : assetPrice,
        minReward: _asset.minReward,
        minBenefit: _asset.minBenefit,
    }

// Process transaction  
const txResults = await processTransaction(res, txWallets, txInfo)

if(txResults === 'Resell'){
    axios.put(`${process.env.BASE_URL}/shares/${txWallets.share}`, {
        price: Number(txWallets.price),
        seller: txWallets.seller
    }, {
        headers: {'Authorization': req.headers.authorization}
    })
    .then(async (response) => {
        res.status(201).json({ success: true,  msg: response.data.msg })
       return next()
    
    })
    .catch(err => new ErrorResponse(err, 500));

    res.status(201).json({ success: true, msg: `Transaction successfull. You are now the owner of share ${txWallets.share}.` })



} else if(txResults === 'New'){
    axios.post(`${process.env.BASE_URL}/shares`, {
        price: Number(txWallets.price),
        seller: txWallets.seller,
        asset: txWallets.asset
    }, {
        headers: {'Authorization': req.headers.authorization}
    })
    .then(async (response) => {
        res.status(201).json({ success: true,  msg: response.data.msg })
        return next()
    })
    .catch(err => new ErrorResponse(err, 500))
}


return txResults;

})



