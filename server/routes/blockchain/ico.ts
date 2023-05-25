import express from 'express';
const router = express.Router({ mergeParams: true});

import {  buyXLN }  from '../../controller/blockchain/ico.js';
import { protect, authorize } from '../../middleware/auth.ts';

router
.route('/buyXLN')
.post( buyXLN );


export default router;