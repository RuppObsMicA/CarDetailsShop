import { getAuthToken } from '../../../utils/localStorage';
import { fetchApi } from '../../fetchAPI';
import {
    type DefaultResponseMessage,
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

export async function verifyToken(): Promise<ResponseVerifyToken> {
    const token = getAuthToken();

    if (!token) {
        throw new Error('Auth token is null or undefined');
    }

    const resData = await fetchApi<{ token: string }, ResponseVerifyToken>({
        endpoint: '/token-verify',
        method: 'POST',
        data: { token },
    });

    if (resData.token) {
        localStorage.setItem('token', resData.token);
    }

    console.log(resData);
    return resData;
}

export async function signUp(userData: SignUpInputs): Promise<DefaultResponseMessage> {
    return fetchApi<SignUpInputs, DefaultResponseMessage>({
        endpoint: '/signup',
        method: 'POST',
        data: userData,
    });
}

export async function signIn(
    data: SignInInputs,
): Promise<ResponseSignInSuccess | ResponseSignInFailure> {
    return fetchApi<SignInInputs, ResponseSignInSuccess | ResponseSignInFailure>({
        endpoint: '/signin',
        method: 'POST',
        data,
    });
}
