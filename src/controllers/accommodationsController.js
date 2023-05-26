export async function getAccommodationsByCity(req, res) {
    const {cityId} = req.params
    const {min,max} = req.body
    try {
        const result=await db.query(`select * from accommodations where "cityId"=$1 and "hotelPrice"<=$3 and "hotelPrice">=$2;`,[cityId,min,max])
        return res.status(200).send(result.rows)

    } catch (err) {
        res.status(500).send(err.message)
    }
}


//getAccommodationsByCity
//getAccommodationsById