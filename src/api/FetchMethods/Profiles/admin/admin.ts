import { fetchApi } from '../../../fetchAPI';
import { ProductFormValues } from '../../../../pages/Profiles/AdminProfilePages/CreateNewProduct';
import { DefaultResponseMessage } from '../../../../pages/SignUp-SignIn/SignUp/SignUp';

export async function createNewProduct(
    data: ProductFormValues,
): Promise<DefaultResponseMessage> {
    return fetchApi<ProductFormValues, DefaultResponseMessage>({
        endpoint: `/create-new-product`,
        method: 'POST',
        data,
    });
}
