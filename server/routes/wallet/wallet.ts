import express from 'express';
const router = express.Router({ mergeParams: true });

import { getWallet, getWallets, createWallet, transactWallet, deleteWallet, chooseWallet } from '../../controller/wallet/wallet.ts';

import advancedResults from '../../middleware/advancedResults.ts';
import { protect, authorize } from '../../middleware/auth.ts';
import Wallet from '../../model/Wallet.ts';

router.route('/')
      .get(
            protect, 
            authorize('publisher', 'admin') as any, 
            advancedResults(Wallet, { path: 'wallets', select: ''}) as any, 
            getWallets )
      .post(protect, authorize('user', 'system', 'publisher', 'admin') as any, createWallet);

router.route('/:id')
.get(protect, authorize('publisher', 'admin') as any,getWallet)
.put(protect, authorize('publisher', 'admin') as any, transactWallet)
.delete(protect, authorize('publisher', 'admin') as any, deleteWallet);

router.route('/:id/choose')
.put(protect, authorize('publisher', 'admin') as any, chooseWallet )


export default router;