import { type UserData } from '../../../../pages/Profiles/GeneralPagesForAllProfiles/PersonalData/PersonalData';
import { fetchApi } from '../../../fetchAPI';
import {
    type ChangePersonalDataForm,
    type ResponseChangePersonalData,
} from '../../../../pages/Profiles/GeneralPagesForAllProfiles/PersonalData/PersonalDataEdit';
import {
    type ChangePasswordForm,
    type ResponseChangePassword,
} from '../../../../pages/Profiles/GeneralPagesForAllProfiles/PersonalData/ChangePassword';

export async function fetchUserDataById(userId: number): Promise<UserData> {
    return fetchApi<undefined, UserData>({
        endpoint: `/fetch-user-data?user_id=${userId}`,
        method: 'GET',
    });
}

export async function fetchUpdatePersonalData(
    data: ChangePersonalDataForm,
    user_id: number,
): Promise<ResponseChangePersonalData> {
    return fetchApi<ChangePersonalDataForm, ResponseChangePersonalData>({
        endpoint: `/change-personal-data?user_id=${user_id}`,
        method: 'POST',
        data,
    });
}

export async function fetchUpdatePassword(
    data: ChangePasswordForm,
    user_id: number,
): Promise<ResponseChangePassword> {
    return fetchApi<ChangePasswordForm, ResponseChangePassword>({
        endpoint: `/change-password?user_id=${user_id}`,
        method: 'POST',
        data,
    });
}
