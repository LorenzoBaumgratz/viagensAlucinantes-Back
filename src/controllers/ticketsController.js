import { db } from "../db/database.js"

export async function getTicketsToCity(req, res) {
    const {cityId} = req.params
    const {min,max} = req.body
    try {
        const result=await db.query(`select * from tickets where "toCityId"=$1 and "ticketPrice"<=$3 and "ticketPrice">=$2;`,[cityId,min,max])
        return res.status(200).send(result.rows)
        // select tickets.*, cities.city from tickets join cities on cities.id=tickets."toCityId" where tickets."toCityId"=1;

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