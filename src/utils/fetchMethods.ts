import {getAuthToken} from "./localStorage";
import {URL} from '../utils/constants'
import {ResponseSignUp, SignUpInputs} from "../components/Profiles/SignUp-SignIn/SignUp/SignUpPage";
import {
    ResponseSignInFailure,
    ResponseSignInSuccess,
    SignInInputs
} from "../components/Profiles/SignUp-SignIn/SignIn/SignInPage";

export async function fetchVerifyToken(){
    const token = {
        token: getAuthToken()
    };
    const response = await fetch(URL + '/token-verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(token)
    })
    const resData = await response.json();
    if (resData.token){
        localStorage.setItem('token', resData.token);
    }

    console.log(resData);
    return resData
}

export async function fetchSignUp(userData:SignUpInputs):Promise<ResponseSignUp>{
    console.log(userData);

    try{
        let response:Response = await fetch(`${URL}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw Error(`HTTP error! Status: ${response.status}`);
        }

        const resData:ResponseSignUp = await response.json();
        return resData;

    } catch (error){
        throw Error(`Failed to sign up: ${error}`);
    }

}

export async function fetchSignIn(data:SignInInputs):Promise<ResponseSignInSuccess | ResponseSignInFailure>{
    try {
        const response: Response = await fetch(`${URL}/signin`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        const resData: ResponseSignInSuccess | ResponseSignInFailure = await response.json();

        if (response.ok) {
            return resData as ResponseSignInSuccess;
        } else {
            return resData as ResponseSignInFailure;
        }

    } catch (error) {
        throw new Error(`Failed to sign in: ${error}`);
    }
}