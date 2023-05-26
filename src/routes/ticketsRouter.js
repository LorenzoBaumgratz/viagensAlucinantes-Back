import { Router } from "express";
import { getCities, getTicketsToCity} from "../controllers/ticketsController.js";

const tickets=Router()

tickets.get("/cities",getCities)
tickets.get("/tickets/:cityId",getTicketsToCity)

export default tickets