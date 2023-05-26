import { Router } from "express";
import tickets from "./ticketsRouter.js";

const router= Router()

router.use(tickets)

export default router