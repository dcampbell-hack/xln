import express from 'express';
const router = express.Router({ mergeParams: true});

import { 
    textToImage,
    getChatMessages,
    postChatMessage,
    selectLangModel
}  from '../../controller/asset/ai.js';

import { protect, authorize } from '../../middleware/auth.js';

router
.route('/art')
.post(protect, authorize('publisher', 'admin'), textToImage)
// .get(protect, authorize('publisher', 'admin'), getAssetArt)

router
.route('/chat')
.get(protect, authorize('publisher', 'admin'),getChatMessages)
.post(protect, authorize('publisher', 'admin'), postChatMessage)

router
.route('/llm')
.post(protect, authorize('publisher', 'admin'), selectLangModel)


export default router;