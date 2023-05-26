import { Router } from "express";
import tickets from "./ticketsRouter.js";
import accommodation from "./accommodationsRouter.js";

const router= Router()

router.use(tickets)
router.use(accommodation)

export default router