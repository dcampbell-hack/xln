import express from 'express';
const router = express.Router({ mergeParams: true});

import { 
    textToImage,
    getChatMessages,
    runOpenAIModel,
    runHuggingFaceModel,
    runAgentGPT
}  from '../../controller/asset/ai.ts';

import { protect, authorize } from '../../middleware/auth.ts';

router
.route('/art')
.post(protect, authorize('publisher', 'admin') as any, textToImage)
// .get(protect, authorize('publisher', 'admin'), getAssetArt)

router
.route('/chat')
.get(protect, authorize('publisher', 'admin') as any,getChatMessages)
.post(protect, authorize('publisher', 'admin') as any, runOpenAIModel)

router
.route('/llm')
.post(protect, authorize('publisher', 'admin') as any, runHuggingFaceModel)

router
.route('/agent')
.post(protect, authorize('publisher', 'admin') as any, runAgentGPT)


export default router;