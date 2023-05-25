import Shareholder from '../model/Shareholder.ts';
import ErrorResponse from '../utils/errorResponse.ts';

export const shareholderValidation = async (obj) => {

    const calculateSupernode = (array) => {
       const sum = array.map(arr => arr && arr.marketcap ? arr.marketcap : 0 ).reduce((a, b ) => a + b);
       const average = sum / array.length;
       const scale = average * 0.3;
       const threshold = sum + scale;
       return threshold;
     }

    const { userId, assetId, assetsOwned, sharesOwned, sharesCreated, assetStock, marketcap, assets } = obj;

    // Check if user already has Shareholder model
    const user = await Shareholder.findOne({user: userId });
    const asset = await Shareholder.findOne({asset: assetId });

    console.log('Shareholder -------------------------', user )

    if(!user && !asset){
         await Shareholder.create({user: userId, asset: assetId, assetsOwned, sharesOwned  })
    } else {
        const update = await Shareholder.findById(user)
        if(!update) new ErrorResponse('Sorry no user found', 404)
        await Shareholder.findByIdAndUpdate(user, { assetsOwned, sharesOwned })
    }

    // Check if user qualifies to be a Masternode
     const percentageOf = ( sharesOwned / assetStock ) * 100;
     console.log('Shareholder ------------- Masternode ----', percentageOf)
     if(percentageOf > 30){
        await Shareholder.findOneAndUpdate({user: userId, asset: assetId }, {
            masternode: true
        })
     } else {
        await Shareholder.findOneAndUpdate({ user: userId, asset: assetId }, {
            masternode: false
        })
     }


    // Check if user qualifies to be a Supernode
    console.log('Shareholder ------------- Supernode ----', marketcap, calculateSupernode(assets), marketcap > calculateSupernode(assets))
    if(marketcap > calculateSupernode(assets)){
    await Shareholder.findOneAndUpdate({ user: userId, asset: assetId }, {
        supernode: true
    })
   } else {
    await Shareholder.findOneAndUpdate({ user: userId, asset: assetId }, {
        supernode: false
    })
   }

}