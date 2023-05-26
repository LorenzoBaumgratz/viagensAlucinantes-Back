import { db } from "../db/database.js"

export async function getTicketsToCity(req, res) {
    const {city} = req.params
    const {min,max} = req.body
    try {
        const result=await db.query(`select * from tickets where "toCityId"=$1 and $2<="ticketPrice"<=$3;`,[city,min,max])
        return res.status(200).send(result.rows)
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