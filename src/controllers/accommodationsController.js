import { db } from "../db/database.js"

export async function getAccommodations(req, res) {
    const {cityId} = req.params
    const {min,max} = req.body
    try {
        const result=await db.query(`select * from accommodations where "cityId"=$1 and "hotelPrice"<=$3 and "hotelPrice">=$2;`,[cityId,min,max])
        return res.status(200).send(result.rows)

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getAccommodationsDetails(req, res) {
    const {accommodationId} = req.params
    try {
        const result=await db.query(`select accommodations.*,cities.city,"mainImages".mainUrl from accommodations
        join cities on cities.id=accommodations."cityId" join "mainImages" on "mainImages".id="mainImageId"
        where accommodations.id=$1 ;`,[accommodationId])
        return res.status(200).send(result.rows)

    } catch (err) {
        res.status(500).send(err.message)
    }
}
