const express = require('express');
const router = express.Router({ mergeParams: true});

const { 
    getText,
    getTexts,
    createText
}  = require('../../controller/asset/text');

const { protect, authorize } = require('../../middleware/auth');

router
.route('/')
.post(protect, authorize('publisher', 'admin'), createText)
.get(protect, authorize('publisher', 'admin'), getTexts)

router
.route('/:id')
.get(protect, authorize('publisher', 'admin'), getText)


module.exports = router;