import express from 'express';
const router = express.Router({ mergeParams: true});

import { start, buyXLN, withdrawTokens, withdrawDai }  from '../../controller/blockchain/ico.js';
import { protect, authorize } from '../../middleware/auth.js';

router
.route('/start')
.post( start );

router
.route('/buyXLN')
.post( buyXLN );

router
.route('/withdrawTokens')
.post( withdrawTokens );

router
.route('/withdrawDai')
.post( withdrawDai );


export default router;