// Pkg
import axios from 'axios';

// Utils
import ErrorResponse from '../../utils/errorResponse.js';
import asyncHandler from '../../middleware/async.js';
import { checkConditionals, preventPublicKnowledge, preventSale } from '../../middleware/checkIfValidAsset.js'

// Model
import Asset from '../../model/Asset.js';
import Share from '../../model/asset/Share.js';
import Offer from '../../model/asset/Offer.js';

//@desc Get Offer
//@route GET /api/v1/offers/:id
//@access Public 
export const getOffer = asyncHandler(async (req, res, next ) => {

const offer = await Offer.findById(req.params.id)
                           .populate({ path: 'asset', select: 'name description'})

if(!offer){
    return next(new ErrorResponse(`No offer with the id of ${req.params.id}`, 404))
}

res.status(200).json({
    succes: true,
    data: offer
});

})

//@desc Get Offers 
//@route GET /api/v1/offers       
//@access Public 
export const getOffers = asyncHandler(async (req, res, next ) => {    
    if(req.params.assetId){

        // Check if Asset is set to Private
        preventPublicKnowledge(next, req.params.assetId )

        const offers = await Offer.find({ asset: req.params.assetId });
        return res.status(200).json({
            success: true,
            count: offers.length,
            data: offers
        })
      } else {
          res.status(200).json(res.advancedResults)
      }
})

//@desc Create Offer from asset
//@route POST /api/v1/:assetId/offers 
//@access Public 
export const createOfferDirect = asyncHandler(async (req, res, next ) => {
req.body.asset = req.params.assetId;
req.body.user = req.user.id;

//Check Asset's conditionals
await checkConditionals(next, req.params.assetId );

const asset = await Asset.findById(req.params.assetId);

if(!asset){
    return next(new ErrorResponse(`No asset with the id ${req.params.assetId}`, 404))
}

const minCost = asset.price + asset.fee;

//Check if funds are available
if(req.body.resell < minCost){
    return next(new ErrorResponse(`Your resell price cannot be less than ${minCost}.`, 500))
}

//Check if funds are available
if(req.user.totalBalance < minCost){
    return next(new ErrorResponse(`You do not have enough funds to put up an offer.`, 500))
}

// Check if assetOwner is creating an offer for himself
if(asset.user.toString() === req.user.id){
    return next(new ErrorResponse(`User cannot create an offer for own asset.`, 500))
}

const offerModel = {
    seller: asset.user,
    assetOwner: asset.user,
    price: minCost,
    resell: req.body.resell,
    asset: asset.id,
    user: req.user.id
}


const offer = await Offer.create( offerModel);

res.status(201).json({
    success: true,
    data: offer
})

})

//@desc Create Offer from share
//@route POST /api/v1/:shareId/resell
//@access Public 
export const createOfferResell = asyncHandler(async (req, res, next ) => {

    req.body.share = req.params.shareid;
    const share = await Share.findOne({ _id: req.params.shareId });

    if(!share){
        return next(new ErrorResponse(`No share with the id ${req.params.shareId}`, 404))
    }

//Check if resell is less than price
if(req.body.resell < share.price ){
    return next(new ErrorResponse(`Resell can not be less that ${share.price}`, 500))
}
    
//Check if funds are available
if(req.user.totalBalance < share.price){
    return next(new ErrorResponse(`You do not have enough funds to put up an offer.`, 500))
}
    
    const offerModel = {
        secondHand: true,
        seller: share.user,
        assetOwner: share.to_user,
        price: share.price,
        resell: req.body.resell,
        share: share.id,
        asset: share.asset,
        user: req.user.id
    }
    
    
    const offer = await Offer.create( offerModel);
    res.status(201).json({
        success: true,
        data: offer
    })
    
})


//@desc Respond To Offer
//@route GET /api/v1/offers/:id
//@access Public 
export const respondOffer = asyncHandler(async (req, res, next ) => {

const response = req.body.accepted
 let offer = await Offer.findById(req.params.id);
 if(!offer){
     return next(new ErrorResponse(`No offer with the id of ${req.params.id}`, 404))
 }

 let asset = await Asset.findById(offer.asset);
 if(!asset){
     return next(new ErrorResponse(`No Asset found with the id of ${asset.id}.`, 404))
 }


if(req.user.id !== offer.assetOwner){
    return next(`Not auhtorized to respond to another user's offer.`, 404)
}

// if(offer.resell < offer.price ){
//     return next(`Offer can not be less than Asset price of ${offer.price}`, 404)
// }

if(response){

if(offer.secondHand){

offer = await Offer.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true});

if(!offer){
    return next(new ErrorResponse(`Offer with the id ${req.params.id}`, 404))
}

req.body.resell =  offer.resell;

  axios.post(`${process.env.BASE_URL}/shares/${offer.share}/tx`, {
    price: Number(offer.price),
    seller: offer.seller,
    asset: offer.asset,
    responded: true
}, {
    headers: {'Authorization': req.headers.authorization}
})
.then(async (response) => {

await offer.remove();
res.status(500).json({ success: true,  msg: response.data.msg })


})
.catch(err => new ErrorResponse(err, 500))



} else {

    //Check conditionals
    await checkConditionals(next, offer.asset);
    await preventSale(next, offer.asset);

    offer = await Offer.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true});
    if(!offer){
        return next(new ErrorResponse(`Offer with the id ${req.params.id}`, 404))
    }
    
      axios.post(`${process.env.BASE_URL}/assets/${offer.asset}/tx`, {
        price: Number(offer.price),
        resell: offer.resell,
        seller: offer.seller,
        asset: offer.asset,
        responded: true
    }, {
        headers: {'Authorization': req.headers.authorization}
    })
    .then(async (response) => {
    await offer.remove();
    res.status(500).json({ success: true,  msg: response.data.msg })
    return next();
    
    })
    .catch(err => new ErrorResponse(err, 500))

} 

} else {

    await offer.remove()

    res.status(200).json({
    success: true,
    data: 'Offer was rejected' 
    })

}


})

//@desc Delete Offer 
//@route GET /api/v1/offers/:id 
//@access Public 
export const deleteOffer = asyncHandler(async (req, res, next ) => {
    const offer = await Offer.findById(req.params.id);
    if(!offer){
        return next(new ErrorResponse(`No offer with the id of ${req.params.id}`, 404))
    }
    // Make sure user is share owner 
    if(offer.user.toString() !== req.user.id && req.user.role !== 'admin'){
        return next(new ErrorResponse(`User ${req.user.id} is not authorized to delete this offer.`, 404))
    }
    
    await offer.remove();
    res.status(200).json({ success: true, data: {} })
})