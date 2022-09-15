import { combineReducers } from 'redux';
import authReducer from './type/authReducer';
import userReducer from './type/userReducer';
import blockchainReducer from './type/blockchainReducer';
import assetReducer from './type/assetReducer';
import shareReducer from './type/shareReducer';
// import commentsReducer from './commentsReducer';
// import offersReducer from './offersReducer';
// import reviewsReducer from './reviewsReducer';
// import txsReducer from './txsReducer';
// import walletsReducer from './walletsReducer';

export default combineReducers({
    assets: assetReducer,
    auth: authReducer,
    blockchain: blockchainReducer,
    shares: shareReducer,
    users: userReducer,

})