export type OnlineStatus = 'ONLINE' | 'OFFLINE' | 'DATE';

export interface Picture {
    comment: string;
    url: string;
}

export interface UserProfile {
    id: number;
    name: string;
    online_status: OnlineStatus;
    is_plus: boolean;
    picture?: Picture;
    last_login: string;
}

export interface PaginationCursor {
    after: string;
}

export interface UserProfilesResponse {
    cursors: PaginationCursor;
    items: UserProfile[];
    total: number;
}
export type SortType = 'DISTANCE' | 'ACTIVITY';

export interface SearchParams {
    length: number;
    sorting?: SortType;
}

export interface ProfilesByIdsParams {
    ids: string[];
}
