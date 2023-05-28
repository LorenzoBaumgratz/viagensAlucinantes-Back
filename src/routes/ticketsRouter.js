import { Router } from "express";
import { getCities, getTicketDetails, getTickets} from "../controllers/ticketsController.js";

const tickets=Router()

tickets.get("/cities",getCities)
tickets.post("/tickets/main/:cityId",getTickets)
tickets.get("/tickets/:ticketId",getTicketDetails)

export default tickets