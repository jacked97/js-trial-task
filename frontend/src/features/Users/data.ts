import {useQuery} from '@tanstack/react-query';
import {SearchParams, UserProfilesResponse} from '../../api/users/types.ts';
import {getUserProfiles} from '../../api/users/userProfiles.ts';

export const useUserProfiles = (params: SearchParams = { length: 32 }) => {
    return useQuery<UserProfilesResponse>({
        queryKey: ['gallery', params],
        queryFn: () => getUserProfiles(params),
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
};
