import {insertClientIntoDB} from "../DataBase/DatabaseSettings.js";
import {getQueryToAddNewClient} from "../DataBase/DatabaseQueries.js";
import jwt from 'jsonwebtoken';
import {privateKey} from "../../JWToken/PrivateKey.js";
import {setConnection} from "../DataBase/DataBaseCreateConnection.js";

export async function signUp(user) {
    console.log(user);

    let connection = setConnection();

    let result = new Promise((resolve, reject) => {
        connection.query(getQueryToAddNewClient(user), function (err, results) {
            if (err) {
                console.log("Failed to send Token")
                reject("Not success")
            } else {
                const token = jwt.sign(user, privateKey);
                console.log("Sent Token");
                resolve([{"message": "Success", "token": token}])
            }
        });
    })
    return await result;
}
