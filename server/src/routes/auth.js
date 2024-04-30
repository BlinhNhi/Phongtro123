// cổng vào của server vs client (thông qua routes).
import express from'express';
import * as authController from "../controllers/auth"

const router = express.Router();

router.post('/register',authController.register);
router.post('/login',authController.login);
export default router;