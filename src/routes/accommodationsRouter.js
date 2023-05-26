import { Router } from "express";
import { getAccommodations, getAccommodationsDetails } from "../controllers/accommodationsController.js";

const accommodation=Router()

accommodation.get("/accommodations/main/:cityId",getAccommodations)
accommodation.get("/accommodations/:accommodationId",getAccommodationsDetails)

export default accommodation