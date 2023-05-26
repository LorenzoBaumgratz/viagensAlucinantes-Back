import { db } from "../db/database.js"

export async function getTickets(req, res) {
    try {
        
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getCities(req, res) {
    try {
        const result=await db.query(`select * from cities;`)
        return res.status(200).send(result.rows)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
//getCities
//getTicketsToCity
//getTicketsToCityById

//getAccommodationsByCity
//getAccommodationsById