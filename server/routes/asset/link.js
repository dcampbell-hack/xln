const express = require('express');
const router = express.Router({ mergeParams: true});

const { 
    getLink,
    getLinks,
    createLink
}  = require('../../controller/asset/link');

const { protect, authorize } = require('../../middleware/auth');

router
.route('/')
.post(protect, authorize('publisher', 'admin'), createLink)
.get(protect, authorize('publisher', 'admin'), getLinks)

router
.route('/:id')
.get(protect, authorize('publisher', 'admin'), getLink)


module.exports = router;