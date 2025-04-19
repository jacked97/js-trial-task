// App.tsx or main entry file
import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../../utils/reactQuery.ts';
import UserProfiles from '../../screens/UserProfiles';
import {SafeContainer} from '@jacked97/cmp-app-container';

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            {/*React Router*/}
            <SafeContainer>
                <UserProfiles />
            </SafeContainer>
        </QueryClientProvider>
    );
}
