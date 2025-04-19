import api from '../../utils/api.ts';
import {
    UserProfilesResponse,
    UserProfile,
    SearchParams,
    ProfilesByIdsParams,
} from './types';

export const getUserProfiles = async (
    params: SearchParams
): Promise<UserProfilesResponse> => {
    const response = await api.get<UserProfilesResponse>('/search', { params: params });
    return response.data;
};

// GET /api/profiles?ids=id1&ids=id2
export const getProfilesByIds = async (
    params: ProfilesByIdsParams
): Promise<UserProfile[]> => {
    const response = await api.get<UserProfile[]>('/profiles', {params: params});
    return response.data;
};
