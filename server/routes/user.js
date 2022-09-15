const express = require('express');
const router = express.Router();

const { 
      getUser, 
      getUsers, 
      createUser, 
      updateUser, 
      deleteUser, 
      updateUserAvatar, 
      updateUserCover 
} = require('../controller/user');

const sharesRouter = require('./share');
const reviewsRouter = require('./review');
const walletRouter = require('./wallet');
const commentsRouter = require('./comment');

router.use('/:userId/wallets', walletRouter)
router.use('/:userId/shares', sharesRouter)
router.use('/:userId/reviews', reviewsRouter)
router.use('/:userId/comments', commentsRouter)


const advancedResults = require('../middleware/advancedResults');
const { protect, authorize } = require('../middleware/auth');
const User = require('../model/User');

router.use(protect);

router.route('/')
      .get(protect, authorize( 'user','publisher', 'admin'), advancedResults(User, {
            path: 'wallets, comments',
            select: '_id'
        }), getUsers)
      .post(createUser);

router.route('/:id')
.get(protect, authorize( 'user','publisher', 'admin'), getUser)
.put(protect, authorize( 'user','publisher', 'admin'), updateUser)
.delete(protect, authorize( 'user','publisher', 'admin'), deleteUser);

router.route('/:id/avatar')
      .put(protect, authorize('user', 'publisher', 'admin'), updateUserAvatar)

router.route('/:id/cover')
      .put(protect, authorize('user', 'publisher', 'admin'), updateUserCover)


module.exports = router;