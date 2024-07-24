import { fetchApi } from '../../fetchAPI';
import { type CartItem } from '../../../store/cart-slice';
import { type NewOrder } from '../../../pages/Cart/ConfirmOrder/ConfirmOrder';

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
    return fetchApi<FetchUpdateCartDatabaseInputs[], ResponseUpdateCartDatabase>({
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
export async function fetchConfirmOrder(data: NewOrder): Promise<ResponseConfirmOrder> {
    return fetchApi<NewOrder, ResponseConfirmOrder>({
        endpoint: '/confirm-order',
        method: 'POST',
        data,
    });
}
