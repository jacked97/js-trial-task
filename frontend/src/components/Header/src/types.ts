import { ReactNode } from 'react';

export interface HeaderProps {
    title?: string | ReactNode;
    left?: ReactNode;
    right?: ReactNode;
    style?: any;
}
