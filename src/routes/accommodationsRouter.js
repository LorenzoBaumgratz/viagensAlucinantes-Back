import { Router } from "express";
import { getAccommodations, getAccommodationsDetails } from "../controllers/accommodationsController.js";

const accommodation=Router()

accommodation.get("/accommodations/main/:cityId",getAccommodations)
accommodation.get("/tickets/:accommodationId",getAccommodationsDetails)

export default accommodation