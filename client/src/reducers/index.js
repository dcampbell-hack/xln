import { combineReducers } from 'redux';
import aiReducer from './type/aiReducer';
import assetReducer from './type/assetReducer';
import audioReducer from './type/audioReducer';
import authReducer from './type/authReducer';
import blockchainReducer from './type/blockchainReducer';
import errorReducer from './type/errorReducer';
import shareReducer from './type/shareReducer';
import userReducer from './type/userReducer';

// import commentsReducer from './commentsReducer';
// import offersReducer from './offersReducer';
// import reviewsReducer from './reviewsReducer';
// import txsReducer from './txsReducer';
// import walletsReducer from './walletsReducer';

export default combineReducers({
    ai: aiReducer,
    assets: assetReducer,
    audio: audioReducer,
    auth: authReducer,
    blockchain: blockchainReducer,
    error: errorReducer,
    shares: shareReducer,
    users: userReducer,

})