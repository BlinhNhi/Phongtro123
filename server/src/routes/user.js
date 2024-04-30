import express from 'express'
import verifyToken from '../middleware/verifyToken'
import * as userController from '../controllers/user'

const router = express.Router()

router.use(verifyToken);
router.get('/get-current', userController.getCurrentUser)
router.put('/update-user', userController.updateUser)




export default router