export function getAuthToken() {
    return localStorage.getItem('token');
}

export function getCart() {
    return JSON.parse(localStorage.getItem('cart') || '');
}
