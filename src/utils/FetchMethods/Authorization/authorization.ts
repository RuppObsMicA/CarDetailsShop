import { getAuthToken } from '../../localStorage';
import { fetchApi } from '../../../api/fetchAPI';
import {
    type ResponseSignUp,
    type SignUpInputs,
} from '../../../pages/SignUp-SignIn/SignUp/SignUp';
import {
    type ResponseSignInFailure,
    type ResponseSignInSuccess,
    type SignInInputs,
} from '../../../pages/SignUp-SignIn/SignIn/SignIn';

type ResponseVerifyToken = {
    user: {
        id: number;
        username: string;
        fullname: string;
        password: string;
        registrationDate: string;
        email: string;
        phone: number;
        role: string;
    };
    token?: string;
};

export async function fetchVerifyToken(): Promise<ResponseVerifyToken> {
    const token = getAuthToken();

    if (!token) {
        throw new Error('Auth token is null or undefined');
    }

    const resData = await fetchApi<{ token: string }, ResponseVerifyToken>({
        endpoint: '/token-verify',
        method: 'POST',
        data: { token },
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (resData.token) {
        localStorage.setItem('token', resData.token);
    }

    console.log(resData);
    return resData;
}

export async function fetchSignUp(userData: SignUpInputs): Promise<ResponseSignUp> {
    return fetchApi<SignUpInputs, ResponseSignUp>({
        endpoint: '/signup',
        method: 'POST',
        data: userData,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export async function fetchSignIn(
    data: SignInInputs,
): Promise<ResponseSignInSuccess | ResponseSignInFailure> {
    return fetchApi<SignInInputs, ResponseSignInSuccess | ResponseSignInFailure>({
        endpoint: '/signin',
        method: 'POST',
        data,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
