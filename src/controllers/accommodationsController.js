import { getAccom, getAccomDetail1, getAccomDetail2, getAccomDetail3 } from "../repositories/accommodationsRepository.js"

export async function getAccommodations(req, res) {
    const {cityId} = req.params
    const {min,max} = req.body
    try {
        const result=await getAccom(cityId,min,max)
        return res.status(200).send(result.rows)

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getAccommodationsDetails(req, res) {
    const {accommodationId} = req.params
    try {
        const result=await getAccomDetail1(accommodationId)
        const images=await getAccomDetail2(accommodationId)
        const areas=await  getAccomDetail3(accommodationId)

        const obj={
            ...result.rows[0],
            areas:areas.rows.map(i=>({
                type:i.type
            })),
            images:images.rows.map(i=>({
                url:i.url
            }))
        }
        return res.status(200).send(obj)

    } catch (err) {
        res.status(500).send(err.message)
    }
}
