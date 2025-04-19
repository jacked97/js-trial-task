import { ReactNode } from 'react';
import { Edge } from 'react-native-safe-area-context';

export interface SafeContainerProps {
    children: ReactNode;
    edges?: Edge[]; // e.g., ['top', 'bottom']
    style?: any;
}
