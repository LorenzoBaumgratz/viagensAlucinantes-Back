import { getCitiesRep, getTicketDetailRep, getTicketsRep } from "../repositories/ticketsRepository.js"

export async function getTicketDetails(req, res) {
    const {ticketId} = req.params
    try {
        const result=await getTicketDetailRep(ticketId)
        return res.status(200).send(result.rows)

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getTickets(req, res) {
    const {cityId} = req.params
    const {min,max} = req.body

    try {
        const result=await getTicketsRep(cityId,max,min)
        return res.status(200).send(result.rows)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getCities(req, res) {
    try {
        const result=await getCitiesRep()
        return res.status(200).send(result.rows)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
