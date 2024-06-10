import {getQueryToAddNewClient, queryToSignIn} from "../../DataBase/DatabaseQueries.js";
import jwt from 'jsonwebtoken';
import {privateKeyAndTokens} from "../../SecretData/PrivateKeysAndTokens/PrivateKeyAndTokens.js";
import {closeConnection, setConnection} from "../../DataBase/DataBaseConnection.js";
import e from "express";

export async function signUp(user) {
    console.log(user);

    const connection = setConnection();

    let result = new Promise((resolve, reject) => {
        connection.query(getQueryToAddNewClient(user), function (err, results) {
            if (err) {
                console.log("Failed to send Token")
                console.log(err)
                reject(err)
            } else {
                const token = jwt.sign(user, privateKeyAndTokens);
                console.log("Sent Token");
                resolve([{"message": "Success", "token": token}])
            }
        });
        closeConnection(connection);
    })

    return await result;
}

export async function signIn(user) {

    const connection = setConnection();

    let result = new Promise((resolve, reject) => {
        connection.query(queryToSignIn(user), function (err, results) {
            if (err) {
                console.log("Failed to connect to DB")
                console.log(err)
                reject(err)
            } else {
                if (results.length > 0){
                    console.log("Got the client");
                    resolve(results);
                } else {
                    console.log("No clients found");
                    resolve("No clients found")
                }
            }
        });
        closeConnection(connection);
    })

    return await result;
}
