import { Router } from "express";
import { getCities, getTickets, getTicketsToCity} from "../controllers/ticketsController.js";

const tickets=Router()

tickets.get("/cities",getCities)
tickets.get("/tickets",getTickets)
tickets.get("/tickets/:cityId",getTicketsToCity)

export default tickets