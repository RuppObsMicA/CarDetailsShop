import {setConnection} from "../post/DataBase/DataBaseCreateConnection.js";

export async function getAllOrders(queryToGetAllOrdersFromDB){

    const connection = setConnection();

    const orders = new Promise((resolve, reject) => {
        connection.query(queryToGetAllOrdersFromDB, (err, results) => {
            if (err) reject(err)
            console.log(results)
            resolve(results)
        })
    })
    return await orders
}