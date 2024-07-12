import { getAuthToken } from './localStorage';
import {
    ResponseSignUp,
    SignUpInputs,
} from '../pages/SignUp-SignIn/SignUp/SignUp';
import {
    ResponseSignInFailure,
    ResponseSignInSuccess,
    SignInInputs,
} from '../pages/SignUp-SignIn/SignIn/SignIn';
import { FetchedProduct } from '../pages/Catalog/CatalogMainContent/CatalogMainContent';
import { CartItem } from '../store/cart-slice';
import { fetchApi } from './fetchAPI';
import { NewOrder } from '../pages/Cart/ConfirmOrder/ConfirmOrder';

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
        localStorage.setItem('token', resData.token); // update the token if the previous one expired
    }

    console.log(resData);
    return resData;
}

export async function fetchSignUp(
    userData: SignUpInputs,
): Promise<ResponseSignUp> {
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
    return fetchApi<
        SignInInputs,
        ResponseSignInSuccess | ResponseSignInFailure
    >({
        endpoint: '/signin',
        method: 'POST',
        data,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
export async function fetchChosenProductType(
    product: string,
): Promise<FetchedProduct[]> {
    return fetchApi<undefined, FetchedProduct[]>({
        endpoint: `/product?product=${product}`,
        method: 'GET',
    });
}

export async function fetchSingleProduct(
    productType: string,
    productId: string,
): Promise<FetchedProduct> {
    return fetchApi<undefined, FetchedProduct>({
        endpoint: `/productId?type=${productType}&id=${productId}`,
        method: 'GET',
    });
}

// Fetch Cart types and function
type FetchUpdateCartDatabaseInputs =
    | {
          userId: number;
          productId: number;
          productType: string;
          quantity: number;
      }
    | {
          userId: number;
          productId: number;
      };

type ResponseUpdateCartDatabase = {
    message: string;
};

export async function fetchUpdateCartDatabase(
    data: FetchUpdateCartDatabaseInputs[],
): Promise<ResponseUpdateCartDatabase> {
    return fetchApi<
        FetchUpdateCartDatabaseInputs[],
        ResponseUpdateCartDatabase
    >({
        endpoint: '/update-cart',
        method: 'POST',
        data,
    });
}

export async function fetchCartData(userId: string): Promise<CartItem[]> {
    return fetchApi<undefined, CartItem[]>({
        endpoint: `/fetch-cart?user_id=${userId}`,
        method: 'GET',
    });
}

type ResponseConfirmOrder = {
    message: string;
};
export async function fetchConfirmOrder(
    data: NewOrder,
): Promise<ResponseConfirmOrder> {
    // fix the any type
    return fetchApi<NewOrder, ResponseConfirmOrder>({
        endpoint: '/confirm-order',
        method: 'POST',
        data,
    });
}
