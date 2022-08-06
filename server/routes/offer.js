const express = require('express');
const Offer = require('../model/Offer');
const router = express.Router({ mergeParams: true });

const { createOfferDirect, createOfferResell, getOffer, getOffers, respondOffer, deleteOffer } = require('../controller/offer');
const { protect, authorize } = require('../middleware/auth');
const advancedResults = require('../middleware/advancedResults');

const commentsRouter = require('./comment');
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



module.exports = router;