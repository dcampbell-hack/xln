const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../model/User');
const Wallet = require('../model/Wallet');


//@desc Get Wallet
//@route GET /api/v1/wallets/:id
//@access Public 
exports.getWallet = asyncHandler(async (req, res, next ) => {

const wallet = await Wallet.findById(req.params.id)
                           .populate({ path: 'user', select: 'name description'})

if(!wallet){
    return next(new ErrorResponse(`No wallet with the id of ${req.params.id}`, 404))
}

res.status(200).json({
    succes: true,
    data: wallet
});

})

//@desc Get Wallets 
//@route GET /api/v1/wallets/       
//@access Public 
exports.getWallets = asyncHandler(async (req, res, next ) => {
    if(req.params.userId){
        const wallets = await Wallet.find({ user: req.params.userId });
        return res.status(200).json({
            success: true,
            count: wallets.length,
            data: wallets
        })
      } else {
          res.status(200).json(res.advancedResults)
      }
})

//@desc Add Wallet
//@route POST /api/v1/:userId/wallets 
//@access Public 
exports.createWallet = asyncHandler(async (req, res, next ) => {
req.body.user = req.params.userId

const user = User.findOne({ _id: req.params.userId });

if(!user){
    return next(new ErrorResponse(`No user with the id ${req.params.userId}`, 404))
}


if(req.body.balance < 0.00001){
    return next(new ErrorResponse(`Balance must be greater than 0 to create a wallet`, 500))  
}


if(req.user.id === req.params.userId){

const wallet = await Wallet.create(req.body);

// Update User Account

const wallets = await Wallet.find({ user: req.params.userId })
//const balance = wallets.length > 0 && wallets.map(({ balance }) => balance).reduce((a,b) => a + b )
await User.findByIdAndUpdate(req.params.userId, { balance: req.body.balance })

res.status(201).json({
    success: true,
    data: wallet
});

} else {
    return next(new ErrorResponse(`You are not authorized to create another user's wallet`, 404))
}

})

//@desc Transaction in  Wallet
//@route PUT /api/v1/wallets/:id
//@access Public 
exports.transactWallet = asyncHandler(async (req, res, next ) => {
 let wallet = await Wallet.findById(req.params.id);
 if(!wallet){
     return next(new ErrorResponse(`No wallet with the id of ${req.params.id}`, 404))
 } 

//Make sure wallet belongs to user or user is admin 
if(wallet.user.toString() !== req.user.id && req.user.role !== 'admin'){
    return next(`Not auhtorized to update ${req.params.id}`, 404)
}
wallet = await Wallet.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true});

const wallets = await Wallet.find({ user: wallet.user });
const totalBalance = wallets.map(wlt => wlt.balance ).reduce((a, b) => a + b )

await User.findByIdAndUpdate(wallet.user, {
    totalBalance: totalBalance
 })

res.status(200).json({
  success: true,
  data: wallet  
})



})

//@desc Choose Active Wallet
//@route POST /api/v1/:userId/wallets/:id/choose
//@access Public 
exports.chooseWallet = asyncHandler(async (req, res, next ) => {

async function activeWallet(id){
    await Wallet.findByIdAndUpdate(id, { active: false }, { new: true, runValidators: true})
}

let wallet =  await Wallet.findById(req.params.id);
const wallets =  await Wallet.find({ user: req.params.userId });

if(!wallet){
    return next(`No wallet found`, 404)
}

wallet = await Wallet.findByIdAndUpdate(req.params.id, { active: req.body.active }, { new: true, runValidators: true});

//Only one wallet can be active at a time
wallets.filter( wlt => wlt.id !== req.params.id ).forEach(wlt => activeWallet(wlt.id));

res.status(200).json({
    success: true,
    data: wallet  
  })

})

//@desc Delete Wallet
//@route GET /api/v1/wallet/:id 
//@access Public 
exports.deleteWallet = asyncHandler(async (req, res, next ) => {
    const wallet = await Wallet.findById(req.params.id);
    if(!wallet){
        return next(new ErrorResponse(`No share with the id of ${req.params.id}`, 404))
    }
    // Make sure user is share owner 
    if(wallet.user.toString() !== req.user.id && req.user.role !== 'admin'){
        return next(new ErrorResponse(`User ${req.user.id} is not authorized to delete this wallet.`, 404))
    }

    await wallet.remove();

const wallets =  await Wallet.find({ user: req.params.id });

const totalBalance = wallets.map(wallet => wallet.balance).reduce((a,b) => a + b);

await User.findOneAndUpdate({ _id: req.params.id }, {  totalBalance }, { 
  new: true, 
  runValidators: true
})

    res.status(200).json({ success: true, data: {} })
});