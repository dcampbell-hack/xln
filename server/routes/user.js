import express from 'express';
const router = express.Router();

import { 
      getUser, 
      getUsers, 
      createUser, 
      updateUser, 
      deleteUser, 
      updateUserAvatar, 
      updateUserCover 
} from '../controller/user.js';

import sharesRouter from './asset/share.js';
import reviewsRouter from './asset/review.js';
import walletRouter from './wallet.js';
import commentsRouter from './asset/comment.js';

import advancedResults from '../middleware/advancedResults.js';
import { protect, authorize } from '../middleware/auth.js';
import User from '../model/User.js';

router.use('/:userId/wallets', walletRouter)
router.use('/:userId/shares', sharesRouter)
router.use('/:userId/reviews', reviewsRouter)
router.use('/:userId/comments', commentsRouter)

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


export default router;