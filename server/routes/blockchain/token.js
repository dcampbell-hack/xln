import express from 'express';
const router = express.Router({ mergeParams: true});

import { updateAdmin, mint }  from '../../controller/blockchain/token.js';

import { protect, authorize } from '../../middleware/auth.js';

router
.route('/update-admin')
.post( updateAdmin );

router
.route('/mint')
.post( mint );


export default router;