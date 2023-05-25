import express from 'express';
const router = express.Router({ mergeParams: true});

import { updateAdmin }  from '../../controller/blockchain/token.ts';

import { protect, authorize } from '../../middleware/auth.ts';

router
.route('/update-admin')
.post( updateAdmin );

export default router;