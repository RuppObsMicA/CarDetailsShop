import {closeConnection, setConnection} from "../DataBase/DataBaseConnection.js";
import {getQueryToAddNewClient, getQueryToAddNewProduct} from "../DataBase/DatabaseQueries.js";
import jwt from "jsonwebtoken";
import {privateKeyAndTokens} from "../SecretData/PrivateKeysAndTokens/PrivateKeyAndTokens.js";
import {sendImageToDropBox} from "../DropBoxMethods/DropBoxMethods.js";

export async function sendNewProductToDB(product, productImageURL){
    console.log(product)
    console.log(productImageURL)

    const connection = setConnection();

    let result = new Promise((resolve, reject) => {
        connection.query(getQueryToAddNewProduct(product, productImageURL), function (err) {
            if (err) {
                console.log("Failed to add new product")
                console.log(err)
                reject([ "Failed to add the product"])
            } else {
                console.log("New product was added");
                resolve( [ "New product was added"]);
            }
        });
        closeConnection(connection);
    })

    return await result;
}

export async function createNewProduct(productImage, productType, product){
    const result = await sendImageToDropBox(productImage, productType, product);
    if (typeof result === "string") {
        return await sendNewProductToDB(product, result);
    } else {
        // console.log(result)
        console.log("fail")
        return ["Failed to load the product"];
    }
}



