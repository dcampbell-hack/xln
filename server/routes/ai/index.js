const express = require('express');
const router = express.Router({ mergeParams: true});

const { 
    hands,
    pipes,
    generateArt,
    smartLearning
}  = require('../../controller/ai/');

const { protect, authorize } = require('../../middleware/auth');

router
.route('/')
.get( smartLearning );

router
.route('/art')
.post(protect, authorize('publisher', 'admin'), generateArt)

router
.route('/hands')
.get(protect, authorize('publisher', 'admin'), pipes )
.post(protect, authorize('publisher', 'admin'), hands )


module.exports = router;