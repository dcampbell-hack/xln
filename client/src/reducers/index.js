import { combineReducers } from 'redux';
import authReducer from './type/authReducer';
import userReducer from './type/userReducer';
import blockchainReducer from './type/blockchainReducer';
//import assetReducer from './type/assetReducer';
// import commentsReducer from './commentsReducer';
// import offersReducer from './offersReducer';
// import reviewsReducer from './reviewsReducer';
// import sharesReducer from './sharesReducer';
// import txsReducer from './txsReducer';
// import walletsReducer from './walletsReducer';

export default combineReducers({
    auth: authReducer,
    users: userReducer,
    blockchain: blockchainReducer
})