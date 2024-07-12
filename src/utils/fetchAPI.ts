import { URL } from './constants';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

type FetchOptions<TRequest> = {
    endpoint: string;
    method: Method;
    data?: TRequest;
    headers?: HeadersInit;
};

export async function fetchApi<TRequest, TResponse>(
    options: FetchOptions<TRequest>,
): Promise<TResponse> {
    const { endpoint, method, data, headers = {} } = options;
    try {
        const config: RequestInit = {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
        };

        if (data) {
            config.body = JSON.stringify(data);
        }

        const response = await fetch(`${URL}${endpoint}`, config);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const resData: TResponse = await response.json();
        return resData;
    } catch (error) {
        console.error(error);
        throw new Error(`Failed to ${method} data: ${error}`);
    }
}
