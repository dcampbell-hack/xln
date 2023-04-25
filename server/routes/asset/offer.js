import express from 'express';
import Offer from '../../model/asset/Offer.js';
const router = express.Router({ mergeParams: true });

import { createOfferDirect, createOfferResell, getOffer, getOffers, respondOffer, deleteOffer } from '../../controller/asset/offer.js';
import { protect, authorize } from '../../middleware/auth.js';
import advancedResults from '../../middleware/advancedResults.js';

import commentsRouter from './comment.js';

router.use('/:offerId/comments', commentsRouter);

router.route('/')
.get(protect, authorize('user','publisher', 'admin'), advancedResults(Offer, {
      path: 'comments',
      select: 'name description'
  }), getOffers)
.post(protect, authorize('publisher', 'admin'), createOfferDirect)


router.route('/resell')
      .post(protect, authorize('publisher', 'admin'), createOfferResell)



router.route('/:id')
      .get(getOffer)
      .put(protect, authorize('publisher', 'admin'), respondOffer )
      .delete(protect, authorize('publisher', 'admin'), deleteOffer )



export default router;