import { Router } from "express";
import { getAccommodations, getAccommodationsDetails } from "../controllers/accommodationsController.js";

const accommodation=Router()

accommodation.post("/accommodations/main/:cityId",getAccommodations)
accommodation.get("/accommodations/:accommodationId",getAccommodationsDetails)

export default accommodation