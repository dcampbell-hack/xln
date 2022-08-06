const express = require('express');
const router = express.Router({ mergeParams: true });

const { getWallet, getWallets, createWallet, transactWallet, deleteWallet, chooseWallet } = require('../controller/wallet');

const advancedResults = require('../middleware/advancedResults');
const { protect, authorize } = require('../middleware/auth');
const Wallet = require('../model/Wallet');

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


module.exports = router;