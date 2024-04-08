import postRouter from "./post.routes.js"
import authRouter from "./auth.routes.js"
import express from "express"

const router = express.Router();

router.use("/posts", postRouter);
router.use('/auth', authRouter);

export default router;
