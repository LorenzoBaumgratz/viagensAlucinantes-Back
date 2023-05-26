import { Router } from "express";
import { getCities, getTickets, getTicketsToCityId} from "../controllers/ticketsController.js";

const tickets=Router()

tickets.get("/cities",getCities)
tickets.get("/tickets/main/:CityId",getTickets)
tickets.get("/tickets/:ticketId",getTicketsToCityId)

export default tickets