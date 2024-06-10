import {setConnection} from "../DataBase/DataBaseConnection.js";
import {queryToGetProductFromDB} from "../DataBase/DatabaseQueries.js";

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

export async function getCertainProduct(productType){

    const connection = setConnection();

    const product = new Promise((resolve, reject) => {
        connection.query(queryToGetProductFromDB(productType), (err, results) => {
            if (err) reject(err)
            console.log(results)
            resolve(results)
        })
    })
    return await product
}

