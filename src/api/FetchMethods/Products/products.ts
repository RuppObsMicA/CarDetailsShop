import { type FetchedProduct } from '../../../pages/Catalog/CatalogMainContent/CatalogMainContent';
import { fetchApi } from '../../fetchAPI';
import { DefaultResponseMessage } from '../../../pages/SignUp-SignIn/SignUp/SignUp';

export async function fetchProductType(product: string): Promise<FetchedProduct[]> {
    return fetchApi<undefined, FetchedProduct[]>({
        endpoint: `/product?product=${product}`,
        method: 'GET',
    });
}

export async function fetchSingleProduct(
    productType: string,
    productId: string,
): Promise<FetchedProduct | DefaultResponseMessage> {
    return fetchApi<undefined, FetchedProduct | DefaultResponseMessage>({
        endpoint: `/productId?type=${productType}&id=${productId}`,
        method: 'GET',
    });
}
