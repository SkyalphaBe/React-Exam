import express from "express";
import qwizz from "./routes/qwizz"
const router = express.Router()

router.use("/qwizz", qwizz)

export default router