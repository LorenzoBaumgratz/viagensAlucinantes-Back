import { db } from "../db/database.js";

export async function getTicketDetailRep(ticketId){
    return db.query(`select tickets.*, cities_from.city AS "fromCity",
    cities_to.city AS "toCity", airlines."airlineName"
     from tickets JOIN cities AS cities_to ON cities_to.id = tickets."toCityId"
     JOIN cities AS cities_from ON cities_from.id = tickets."fromCityId"
     JOIN airlines ON airlines.id = tickets."airlineId" where tickets.id=$1;`,[ticketId])
}

export async function getCitiesRep(){
    return db.query(`select * from cities;`)
}

export async function getTicketsRep(cityId,max,min){
    return db.query(`select tickets.*, cities.city from tickets join cities on cities.id=tickets."fromCityId" where tickets."toCityId"=$1 and "ticketPrice"<=$2 and "ticketPrice">=$3;`,[cityId,max,min])
}