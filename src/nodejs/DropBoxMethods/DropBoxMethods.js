import fs from "fs";
import axios from 'axios';
import {Dropbox} from 'dropbox';
import { setOfDropboxSettings } from "../SecretData/PrivateKeysAndTokens/PrivateKeyAndTokens.js";

let dbx = new Dropbox({
    accessToken: setOfDropboxSettings.dropboxAccessToken,
    fetch: fetch,
})

export async function sendImageToDropBox(productImage, productType, product) {
    try { //  Duplicate code on row 44, create a separate function
        await dbx.filesUpload({
            path: `/${productType}/${productImage.originalname}`,
            contents: fs.readFileSync(productImage.path)
        });
        console.log("Added the image to Dropbox")
        const link = await dbx.sharingCreateSharedLinkWithSettings({path: `/${productType}/${productImage.originalname}`})
        const imageURL = link.result.url.replace("=0", "=1")
        return new Promise(resolve => resolve(imageURL));
    } catch (error) {
        console.log("Can't add the image dropbox " + error);
        if (error.status === 401) {
            const result = await refreshAccessToken(setOfDropboxSettings.dropboxRefreshToken,
                                                    setOfDropboxSettings.dropboxClientID,
                                                    setOfDropboxSettings.dropboxClientSecretKey);
            if (typeof result === "string"){
                setOfDropboxSettings.dropboxAccessToken = result;
                dbx = new Dropbox({
                    accessToken: result,
                    fetch: fetch,
                })
                try {
                    fs.writeFileSync('./SecretData/PrivateKeysAndTokens/AccessToken', result);
                    console.log("Updated the token in the file")
                    console.log(await fs.readFileSync(`./SecretData/PrivateKeysAndTokens/AccessToken`));
                } catch (error) {
                    console.log(error)
                }
                console.log(result)
                console.log(setOfDropboxSettings.dropboxAccessToken);
                console.log("New token is " + setOfDropboxSettings.dropboxAccessToken);
                try {
                    await dbx.filesUpload({
                        path: `/${productType}/${productImage.originalname}`,
                        contents: fs.readFileSync(productImage.path)
                    });
                    console.log("Added the image to Dropbox")
                    const link = await dbx.sharingCreateSharedLinkWithSettings({path: `/${productType}/${productImage.originalname}`})
                    const imageURL = link.result.url.replace("=0", "=1")
                    return new Promise(resolve => resolve(imageURL));
                } catch (error) {
                    console.log(error);
                    return error
                }
            } else {
                console.log(result)
                return result
            }

        } else {
            return new Promise(reject => reject(new Error(error)))
        }
    } finally {
        fs.unlinkSync(productImage.path);
    }
}

async function refreshAccessToken(refreshToken, clientId, clientSecret) {
    const url = 'https://api.dropbox.com/oauth2/token';
    const data = new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        client_id: clientId,
        client_secret: clientSecret
    });

    try {
        const response = await axios.post(url, data);
        console.log("Try to refresh the access token, response status is " + response.status);
        if (response.status === 200) {
            console.log("Updated access_token");
            console.log(response.data);
            return response.data.access_token;
        } else {
            return (response);
        }
    } catch (error) {
        return (error)
    }
}
