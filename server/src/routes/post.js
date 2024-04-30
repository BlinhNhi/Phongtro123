import express from 'express'
import * as postController from '../controllers/post'
import verifyToken from '../middleware/verifyToken'
const router = express.Router();
router.get('/all', postController.getPosts);
router.get('/limit', postController.getPostsLimit);
router.get('/new-post', postController.getNewPost);

router.use(verifyToken)
router.post('/create-new', postController.createNewPost)
router.get('/limit-admin', postController.getPostsLimitAdmin)
router.put('/update', postController.updatePost)
router.delete('/delete', postController.deletePost)




export default router