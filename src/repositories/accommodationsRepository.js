import { db } from "../db/database.js";

export async function getAccom(cityId,min,max){
    return db.query(`select accommodations.*, "mainImages"."mainUrl" from accommodations
    join "mainImages" on accommodations."mainImgId"="mainImages".id
    where "cityId"=$1 and "hotelPrice"<=$3 and "hotelPrice">=$2;`,[cityId,min,max])
}

export async function getAccomDetail1(accommodationId){
    return db.query(`select accommodations.*,cities.city,"mainImages"."mainUrl" from accommodations
        join cities on cities.id=accommodations."cityId" join "mainImages" on "mainImages".id=accommodations."mainImgId"
        where accommodations.id=$1 ;`,[accommodationId])
}

export async function getAccomDetail2(accommodationId){
    return db.query(`select * from images where "accommodationId"=$1;`,[accommodationId])
}

export async function getAccomDetail3(accommodationId){
    return db.query(`select * from areas where "accommodationId"=$1;`,[accommodationId])
}