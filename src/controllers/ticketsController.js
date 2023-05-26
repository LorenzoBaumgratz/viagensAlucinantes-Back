import { db } from "../db/database.js"

export async function getTicketDetails(req, res) {
    const {ticketId} = req.params
    try {
        const result=await db.query(`select tickets.*, cities.city, airlines."airlineName" from tickets join cities on cities.id=tickets."toCityId" and cities.id=tickets."fromCityId" join airlines on airlines.id=tickets."airlineId" where tickets.id=$1;`,[ticketId])
        return res.status(200).send(result.rows)
        // select tickets.*, cities.city from tickets join cities on cities.id=tickets."toCityId" where tickets."toCityId"=1;

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getTickets(req, res) {
    const {cityId} = req.params
    const {min,max} = req.body
    try {
        const result=await db.query(`select tickets.*, cities.city from tickets join cities on cities.id=tickets."fromCityId" where tickets."toCityId"=$1 and "ticketPrice"<=$2 and "ticketPrice">=$3;`,[cityId,max,min])
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
