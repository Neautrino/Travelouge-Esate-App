import express from "express"

const router = express.Router();

router.get("/" , (req, res)=>{
    console.log("post router works fine")
})

export default router;