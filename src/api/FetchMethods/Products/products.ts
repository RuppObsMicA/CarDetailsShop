import { type FetchedProduct } from '../../../pages/Catalog/CatalogMainContent/CatalogMainContent';
import { fetchApi } from '../../fetchAPI';

export async function fetchProductType(product: string): Promise<FetchedProduct[]> {
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