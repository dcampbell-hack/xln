const express = require('express');
const router = express.Router({ mergeParams: true});

const { 
    smartLearning
}  = require('../../controller/ai/');

const { protect, authorize } = require('../../middleware/auth');

router
.route('/')
.get( smartLearning );



module.exports = router;