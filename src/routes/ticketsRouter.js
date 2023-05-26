import { Router } from "express";
import { getCities} from "../controllers/ticketsController.js";

const tickets=Router()

tickets.get("/cities",getCities)

export default tickets