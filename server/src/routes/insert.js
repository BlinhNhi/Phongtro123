// cổng vào của server vs client (thông qua routes).
import express from'express';
import * as insertController from "../controllers/insert"

const router = express.Router();
router.post('/',insertController.insert)
export default router;