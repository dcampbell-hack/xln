import express from 'express';
const router = express.Router({ mergeParams: true });

import { getWallet, getWallets, createWallet, transactWallet, deleteWallet, chooseWallet } from '../controller/wallet.js';

import advancedResults from '../middleware/advancedResults.js';
import { protect, authorize } from '../middleware/auth.js';
import Wallet from '../model/Wallet.js';

router.route('/')
      .get(
            protect, 
            authorize('publisher', 'admin'), 
            advancedResults(Wallet, { path: 'wallets', select: ''}), 
            getWallets )
      .post(protect, authorize('user', 'system', 'publisher', 'admin'), createWallet);

router.route('/:id')
.get(protect, authorize('publisher', 'admin'),getWallet)
.put(protect, authorize('publisher', 'admin'), transactWallet)
.delete(protect, authorize('publisher', 'admin'), deleteWallet);

router.route('/:id/choose')
.put(protect, authorize('publisher', 'admin'), chooseWallet )


export default router;