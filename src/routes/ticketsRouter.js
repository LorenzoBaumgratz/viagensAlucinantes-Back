import { Router } from "express";
import { getTickets } from "../controllers/ticketsController.js";

const tickets=Router()

tickets.get("",getTickets)

export default tickets