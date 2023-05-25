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
} from '../../controller/user/user.ts';

import sharesRouter from '../asset/share.ts';
import reviewsRouter from '../asset/review.ts';
import walletRouter from '../wallet/wallet.ts';
import commentsRouter from '../asset/comment.ts';

import advancedResults from '../../middleware/advancedResults.ts';
import { protect, authorize } from '../../middleware/auth.ts';
import User from '../../model/User.ts';

router.use('/:userId/wallets', walletRouter)
router.use('/:userId/shares', sharesRouter)
router.use('/:userId/reviews', reviewsRouter)
router.use('/:userId/comments', commentsRouter)

router.use(protect);

router.route('/')
      .get(protect, authorize( 'user','publisher', 'admin') as any, advancedResults(User, {
            path: 'wallets, comments',
            select: '_id'
        }) as any, getUsers)
      .post(createUser);

router.route('/:id')
.get(protect, authorize( 'user','publisher', 'admin') as any, getUser)
.put(protect, authorize( 'user','publisher', 'admin') as any, updateUser)
.delete(protect, authorize( 'user','publisher', 'admin') as any, deleteUser);

router.route('/:id/avatar')
      .put(protect, authorize('user', 'publisher', 'admin') as any, updateUserAvatar)

router.route('/:id/cover')
      .put(protect, authorize('user', 'publisher', 'admin') as any, updateUserCover)


export default router;